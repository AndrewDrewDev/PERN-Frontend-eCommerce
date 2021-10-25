import { FC } from 'react'

type TAdminFormInput = {
  inputType?: 'input' | 'textarea'
  name: string
  value: string
  setValue: (newValue: string) => void
  autoFocus?: boolean
}
const AdminFormInput: FC<TAdminFormInput> = ({
  inputType,
  name,
  value,
  setValue,
  autoFocus,
}) => {
  if (!inputType) inputType = 'input'
  return (
    <>
      <div className="px-4 py-2 w-3/4 ">
        <label htmlFor={name} className="text-lg font-bold text-gray-700">
          {name}
        </label>
        {inputType === 'input' ? (
          <input
            id={name}
            className="mt-2 w-full px-2 duration-300 py-1 border-2
            focus:border-blue-500 focus:outline-none focus:shadow-outline
            rounded-md focus:ring-4 flex-grow outline-none text-gray-700
            focus:text-blue-700"
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Введите текст"
            autoFocus={autoFocus}
          />
        ) : (
          <textarea
            value={value}
            onChange={e => setValue(e.target.value)}
            className="h-96 mt-2 w-full px-2 duration-300 py-1 border-2
            focus:border-blue-500 focus:outline-none focus:shadow-outline
            rounded-md focus:ring-4 flex-grow outline-none text-gray-700
            focus:text-blue-700"
          />
        )}
      </div>
    </>
  )
}

export { AdminFormInput }
