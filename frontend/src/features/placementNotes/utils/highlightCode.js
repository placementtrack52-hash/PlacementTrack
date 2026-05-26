const JAVA_KEYWORDS =
  /\b(public|class|static|void|int|double|boolean|return|new|extends|override|if|else|for|while|String|System)\b/gi
const PYTHON_KEYWORDS =
  /\b(def|class|if|else|elif|for|while|return|import|from|print|lambda|True|False|None|in|as)\b/gi

const escapeHtml = (text) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

export const highlightCode = (code, language = 'java') => {
  const escaped = escapeHtml(code)
  const withStrings = escaped.replace(
    /("([^"\\]|\\.)*"|'([^'\\]|\\.)*')/g,
    '<span class="text-[#c7254e]">$1</span>',
  )
  const keywordRegex = language === 'python' ? PYTHON_KEYWORDS : JAVA_KEYWORDS
  return withStrings.replace(
    keywordRegex,
    '<span class="text-[#1a5fb4] font-medium">$1</span>',
  )
}

export const formatDocText = (text) => {
  if (!text) return ''

  const escaped = escapeHtml(text).replace(
    /\*\*([^*]+)\*\*/g,
    '<strong class="font-semibold text-[#2e7d32] dark:text-emerald-400">$1</strong>',
  )

  const lines = escaped.split(/\r?\n/)
  const htmlParts = []
  let paragraphLines = []
  let currentList = null

  const flushParagraph = () => {
    if (paragraphLines.length === 0) return
    htmlParts.push(`<p class="mt-4 leading-7">${paragraphLines.join(' ')}</p>`)
    paragraphLines = []
  }

  const flushList = () => {
    if (!currentList) return

    const listClass = `mt-4 list-inside ${currentList.type === 'ul' ? 'list-disc' : 'list-decimal'} space-y-3 text-slate-700 dark:text-slate-300`
    const listItems = currentList.items
      .map((item) => {
        if (item.content.length === 0) return '<li />'
        const [firstLine, ...restLines] = item.content
        let itemHtml = `<span>${firstLine}</span>`
        let paragraphOpen = false

        for (const line of restLines) {
          if (line === '') {
            if (paragraphOpen) {
              itemHtml += '</p>'
            }
            itemHtml += '<p class="mt-2">'
            paragraphOpen = true
            continue
          }

          if (!paragraphOpen) {
            itemHtml += `<p class="mt-2">${line}`
            paragraphOpen = true
          } else {
            itemHtml += ` ${line}`
          }
        }

        if (paragraphOpen) {
          itemHtml += '</p>'
        }

        return `<li class="leading-7">${itemHtml}</li>`
      })
      .join('')

    htmlParts.push(`<${currentList.type} class="${listClass}">${listItems}</${currentList.type}>`)
    currentList = null
  }

  const startList = (type) => {
    if (!currentList || currentList.type !== type) {
      flushList()
      currentList = { type, items: [] }
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()

    if (line === '') {
      if (currentList && currentList.items.length > 0) {
        currentList.items[currentList.items.length - 1].content.push('')
      } else {
        flushParagraph()
        flushList()
      }
      continue
    }

    const unorderedMatch = line.match(/^(?:•|-|\*)\s+(.*)$/)
    const orderedMatch = line.match(/^(\d+)\.\s+(.*)$/)

    if (unorderedMatch) {
      flushParagraph()
      startList('ul')
      currentList.items.push({ content: [unorderedMatch[1]] })
      continue
    }

    if (orderedMatch) {
      flushParagraph()
      startList('ol')
      currentList.items.push({ content: [orderedMatch[2]] })
      continue
    }

    if (currentList && currentList.items.length > 0) {
      currentList.items[currentList.items.length - 1].content.push(line)
      continue
    }

    paragraphLines.push(line)
  }

  flushParagraph()
  flushList()
  return htmlParts.join('')
}
