import { FC } from 'react'
import { InputWrapper } from './InputWrapper'

type TAdminFormInputFile = {
  name: string
  setValue: (newValue: File | null) => void
  autoFocus?: boolean
}
const InputFile: FC<TAdminFormInputFile> = ({ name, setValue, autoFocus }) => {
  return (
    <InputWrapper name={name}>
      <input
        id={name}
        className="mt-2 w-full px-2 duration-300 py-1 border-2
            focus:border-blue-500 focus:outline-none focus:shadow-outline
            rounded-md focus:ring-4 flex-grow outline-none text-gray-700
            focus:text-blue-700"
        type="file"
        onChange={e => setValue(e.target.files ? e.target.files[0] : null)}
        autoFocus={autoFocus}
      />
    </InputWrapper>
  )
}

export { InputFile }
