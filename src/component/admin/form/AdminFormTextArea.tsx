import { FC } from 'react'
import { AdminFormInputWrapper } from './AdminFormInputWrapper'
import { TAdminFormInput } from './AdminFormInput'

const AdminFormTextArea: FC<TAdminFormInput> = ({
  name,
  value,
  setValue,
  autoFocus,
}) => {
  return (
    <AdminFormInputWrapper name={name}>
      <textarea
        value={value}
        autoFocus={autoFocus}
        onChange={e => setValue(e.target.value)}
        className="h-96 mt-2 w-full px-2 duration-300 py-1 border-2
            focus:border-blue-500 focus:outline-none focus:shadow-outline
            rounded-md focus:ring-4 flex-grow outline-none text-gray-700
            focus:text-blue-700"
      />
    </AdminFormInputWrapper>
  )
}

export { AdminFormTextArea }
