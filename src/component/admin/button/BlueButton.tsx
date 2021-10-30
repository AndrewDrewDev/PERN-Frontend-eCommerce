import React, { FC } from 'react'

type TBlueButton = {
  type: 'submit' | 'button'
  content: string
  onClickHandler?: (e: any) => void
}
const BlueButton: FC<TBlueButton> = ({ type, content, onClickHandler }) => {
  return (
    <button
      type={type}
      className="my-3 font-medium p-2 bg-blue-500 text-white duration-500
      rounded-lg hover:bg-blue-600 border border-blue-600"
      onClick={onClickHandler}
    >
      {content}
    </button>
  )
}

export default BlueButton
