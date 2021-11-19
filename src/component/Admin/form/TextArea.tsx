import { FC } from 'react'
import { InputWrapper } from './InputWrapper'
import { TAdminFormInput } from './Input'

const TextArea: FC<TAdminFormInput> = ({
  name,
  value,
  setValue,
  autoFocus,
}) => {
  return (
    <InputWrapper name={name}>
      <textarea
        value={value}
        autoFocus={autoFocus}
        onChange={e => setValue(e.target.value)}
        className="h-96 mt-2 w-full px-2 duration-300 py-1 border-2
            focus:border-blue-500 focus:outline-none focus:shadow-outline
            rounded-md focus:ring-4 flex-grow outline-none text-gray-700
            focus:text-blue-700"
      />
    </InputWrapper>
  )
}

export { TextArea }
