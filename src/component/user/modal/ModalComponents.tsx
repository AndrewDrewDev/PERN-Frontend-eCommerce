import { Dispatch, FC, SetStateAction } from 'react'

type TModalWrapper = {
  closeHandler: () => void
}

const ModalWrapper: FC<TModalWrapper> = ({ children, closeHandler }) => {
  return (
    <>
      <div
        className="fixed inset-0 w-full h-screen flex justify-center
          items-center z-50 bg-black bg-opacity-50 duration-300
          overflow-y-hidden"
        onClick={() => closeHandler()}
      >
        <div
          className="relative text-gray-700 bg-white my-5 py-5 px-5 rounded w-11/12
            md:w-4/5 overflow-auto"
          onClick={e => e.stopPropagation()}
          style={{
            maxHeight: '95%',
          }}
        >
          {children}
        </div>
      </div>
    </>
  )
}

type TModalInputItem = {
  inputType?: 'input' | 'textarea'
  name: string
  value: string
  setValue: (newValue: string) => void
  autoFocus?: boolean
}
const ModalInputItem: FC<TModalInputItem> = ({
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

type TModalSelectItem = {
  title: string
  options: string[] | null | undefined
  selected?: string
  selectedHandle: Dispatch<SetStateAction<any>>
}
const ModalSelectItem: FC<TModalSelectItem> = ({
  title,
  options,
  selected,
  selectedHandle,
}) => {
  return (
    <div className="px-4 py-2 w-3/4 flex flex-col ">
      <label htmlFor={title} className="text-lg font-bold text-gray-700">
        {title}
      </label>
      <div className="relative mt-1 flex ">
        <svg
          className="w-7 h-7 text-white bg-blue-700 absolute top-0 ml-56 pointer-events-none p-1 rounded-r"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
          ></path>
        </svg>
        <select
          id={title}
          className="font-bold rounded border-2 border-blue-700
          text-gray-600 w-60 px-2 pr-10 bg-white hover:border-gray-400
          focus:outline-none appearance-none"
          onChange={e => selectedHandle(e.target.value)}
        >
          <option value={''}>Отсутствует</option>
          {options
            ? options.map(i => {
                if (i === selected)
                  return (
                    <option selected value={i}>
                      {i}
                    </option>
                  )
                return <option value={i}>{i}</option>
              })
            : null}
        </select>
      </div>
    </div>
  )
}

export { ModalWrapper, ModalInputItem, ModalSelectItem }
