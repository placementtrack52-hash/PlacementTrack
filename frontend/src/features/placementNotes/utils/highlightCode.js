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
  let html = ''
  let openList = null
  let paragraphLines = []

  const flushParagraph = () => {
    if (paragraphLines.length === 0) return
    html += `<p class="mt-4 leading-7">${paragraphLines.join(' ')}</p>`
    paragraphLines = []
  }

  const closeList = () => {
    if (openList) {
      html += `</${openList}>`
      openList = null
    }
  }

  const startList = (type) => {
    closeList()
    openList = type
    html += `<${type} class="mt-4 list-inside ${type === 'ul' ? 'list-disc' : 'list-decimal'} space-y-1 text-slate-700 dark:text-slate-300">`
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()

    if (line === '') {
      flushParagraph()
      closeList()
      continue
    }

    const unorderedMatch = line.match(/^(?:•|-|\*)\s+(.*)$/)
    const orderedMatch = line.match(/^(\d+)\.\s+(.*)$/)

    if (unorderedMatch) {
      flushParagraph()
      if (openList !== 'ul') startList('ul')
      html += `<li>${unorderedMatch[1]}</li>`
      continue
    }

    if (orderedMatch) {
      flushParagraph()
      if (openList !== 'ol') startList('ol')
      html += `<li>${orderedMatch[2]}</li>`
      continue
    }

    paragraphLines.push(line)
  }

  flushParagraph()
  closeList()
  return html
}
