import React, { FC } from 'react'
import cn from 'classnames'
import s from './Buttons.module.css'

type TButton = {
  type?: 'submit' | 'button'
  content: string
  onClickHandler?: (e: any) => void
  color?: 'blue' | 'red'
}
const Button: FC<TButton> = ({
  type = 'button',
  content,
  onClickHandler,
  color,
}) => {
  return (
    <button
      type={type}
      className={cn(
        s.btn,
        { [s.btn__red]: color === 'red' },
        { [s.btn__blue]: color === 'blue' || !color }
      )}
      onClick={onClickHandler}
    >
      {content}
    </button>
  )
}

export default Button
