import { FC } from 'react'
import { ReactElement } from 'react'
import { TProductPageDataStatus } from '../../../types'

// TODO: Stopped this
type TProductInStock = { status: TProductPageDataStatus }

const ProductInStock: FC<TProductInStock> = ({ status }): ReactElement => {
  // if prodcut allow by default
  let style: string = 'flex px-1 rounded border border-green-400 bg-green-200'
  let name: string = 'Товар в наличии'
  let svg: ReactElement = (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  )

  if (status === 'нет') {
    // if product not allow
    style = 'flex px-1 rounded bg-red-400 border border-red-400 text-white'
    name = 'Нет в наличии'
    svg = (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    )
  } else if (status === 'подзаказ') {
    // if product under the order
    style =
      'flex px-1 rounded bg-red-400 border text-yellow-600 bg-yellow-200 border-yellow-400'
    name = 'Под Заказ'
    svg = (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    )
  }

  return (
    <div className={style}>
      {svg}
      <p className="ml-1">{name}</p>
    </div>
  )
}

export { ProductInStock }
