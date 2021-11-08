import React, { FC } from 'react'

const CheckboxFilter: FC<{
  id: number
  name: string
  onClickHandler: (event: any) => any
}> = ({ id, name, onClickHandler }) => {
  return (
    <label className="flex items-center">
      <input
        onClick={onClickHandler}
        className="h-4 w-4 duration-300"
        type="checkbox"
        value={id}
      />
      <span className="ml-2 font-medium text-lg">{name}</span>
    </label>
  )
}

export { CheckboxFilter }
