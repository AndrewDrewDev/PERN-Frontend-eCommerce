import React, { FC } from 'react'

const CheckboxFilter: FC<{
  id: number
  name: string
  onClickHandler: (event: any) => any
  checked?: boolean
}> = ({ id, name, onClickHandler, checked = false }) => {
  return (
    <label className="flex items-center">
      <input
        onClick={onClickHandler}
        className="h-4 w-4 duration-300"
        type="checkbox"
        value={id}
        checked={checked}
      />
      <span className="ml-2 font-medium text-lg">{name}</span>
    </label>
  )
}

export { CheckboxFilter }
