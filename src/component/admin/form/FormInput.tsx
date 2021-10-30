import { FC } from 'react'
import { FormInputWrapper } from './FormInputWrapper'

export type TAdminFormInput = {
  name: string
  value: string
  setValue: (newValue: string) => void
  autoFocus?: boolean
}
const FormInput: FC<TAdminFormInput> = ({
  name,
  value,
  setValue,
  autoFocus,
}) => {
  return (
    <>
      <FormInputWrapper name={name}>
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
      </FormInputWrapper>
    </>
  )
}

export { FormInput }
