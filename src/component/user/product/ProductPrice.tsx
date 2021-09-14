import { FC } from 'react'
import { ReactElement } from 'react'

type TProductPrice = {
  price: string
}

const ProductPrice: FC<TProductPrice> = ({ price }): ReactElement => {
  return (
    <div className="mx-auto mb-1">
      <div className="text-xl text-gray-700">
        Цена:
        <span
          className="item_price title-font font-medium text-2xl
          text-red-500"
        >
          {' '}
          {price} руб.
        </span>
      </div>
    </div>
  )
}

export { ProductPrice }
