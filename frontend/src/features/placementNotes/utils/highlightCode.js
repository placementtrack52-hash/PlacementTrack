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
  const escaped = escapeHtml(text)
  return escaped.replace(
    /\*\*([^*]+)\*\*/g,
    '<strong class="font-semibold text-[#2e7d32] dark:text-emerald-400">$1</strong>',
  )
}
