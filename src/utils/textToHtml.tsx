import { ReactNode, ReactNodeArray } from 'react'
import reactStringReplace from 'react-string-replace'

const textToHtml = (text: string): ReactNode => {
  let replacedText: string | ReactNodeArray

  // Add latter to key unieque, else show visual bugs
  replacedText = reactStringReplace(text, /\*\*/gm, (match, i) => (
    <span key={i + 'a'} className="font-bold">
      {match}
    </span>
  ))

  replacedText = reactStringReplace(replacedText, /\n/gms, (match, i) => (
    <div key={i + 'b'} className="my-3">
      {match}
    </div>
  ))

  return replacedText
}

export default textToHtml
