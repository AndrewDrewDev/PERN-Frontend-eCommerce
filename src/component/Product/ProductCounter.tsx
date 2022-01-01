import { FC, useEffect, useState } from 'react'
import { ReactElement } from 'react'

interface IProductCounterProps {
  callback: (value: number) => void
}

const ProductCounter: FC<IProductCounterProps> = ({ callback }) => {
  const [value, setValue] = useState(1)

  useEffect(() => {
    callback(value)
  }, [value])

  return (
    <div className="flex items-center my-2">
      <div className="flex flex-col mb-1 mr-4">
        <p className="text-xs font-bold">Укажите количество:</p>
        <div className="flex">
          <button
            className="flex p-1 justify-center items-center border
            rounded-l-lg focus:outline-none hover:text-gray-600"
            onClick={() => setValue(value > 1 ? value - 1 : 1)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <input
            className="item_quantity w-12 border text-center p-1
              focus:outline-none"
            type="number"
            value={value}
            onChange={e => setValue(Number(e.target.value))}
          />
          <button
            className="border flex p-1 justify-center items-center
             rounded-r-lg focus:outline-none hover:text-gray-600"
            onClick={() => setValue(value + 1)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export { ProductCounter }
