import { ReactNode, ReactNodeArray } from 'react'
import reactStringReplace from 'react-string-replace'
import { nanoid } from 'nanoid'

const textToHtml = (text: string): ReactNode => {
  let replacedText: string | ReactNodeArray

  // Add latter to key unieque, else show visual bugs
  replacedText = reactStringReplace(text, /\*\*/gm, match => (
    <span key={nanoid()} className="font-bold">
      {match}
    </span>
  ))

  replacedText = reactStringReplace(replacedText, /\n/gms, match => (
    <div key={nanoid()} className="my-3">
      {match}
    </div>
  ))

  return replacedText
}

export default textToHtml
