import { Dispatch, FC, SetStateAction } from 'react'

type TAdminFormSelect = {
  title: string
  options: string[] | null | undefined
  selected?: string
  selectedHandle: Dispatch<SetStateAction<any>>
}
const AdminFormSelect: FC<TAdminFormSelect> = ({
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
export { AdminFormSelect }
