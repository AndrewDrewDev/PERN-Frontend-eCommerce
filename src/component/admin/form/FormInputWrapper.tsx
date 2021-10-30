import { FC } from 'react'

const FormInputWrapper: FC<{ name: string }> = ({ name, children }) => {
  return (
    <>
      <div className="px-4 py-2 w-3/4 ">
        <label htmlFor={name} className="text-lg font-bold text-gray-700">
          {name}
        </label>
        {children}
      </div>
    </>
  )
}

export { FormInputWrapper }
