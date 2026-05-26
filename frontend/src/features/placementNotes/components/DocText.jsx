import { formatDocText } from '../utils/highlightCode'

const DocText = ({ children, className = '' }) => {
  if (!children) return null
  return (
    <div
      className={`prose prose-sm max-w-none text-slate-700 dark:text-slate-300 ${className}`}
      dangerouslySetInnerHTML={{ __html: formatDocText(children) }}
    />
  )
}

export default DocText
