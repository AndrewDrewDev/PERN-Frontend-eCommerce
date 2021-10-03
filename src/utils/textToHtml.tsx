import { ReactNode, ReactNodeArray } from 'react'
import reactStringReplace from 'react-string-replace'

const textToHtml = (text: string): ReactNode => {
  let replacedText: string | ReactNodeArray

  replacedText = reactStringReplace(text, /\*\*/gm, (match, i) => (
    <span key={i} className="font-bold">
      {match}
    </span>
  ))

  replacedText = reactStringReplace(replacedText, /\n/gm, () => (
    <div className="my-3"></div>
  ))

  return replacedText
}

export default textToHtml
