import { formatDocText } from '../utils/highlightCode'

const DocText = ({ children, className = '' }) => {
  if (!children) return null
  return (
    <p
      className={`text-[15px] leading-7 text-slate-700 dark:text-slate-300 ${className}`}
      dangerouslySetInnerHTML={{ __html: formatDocText(children) }}
    />
  )
}

export default DocText
