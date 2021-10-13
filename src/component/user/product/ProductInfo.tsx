import { ReactElement, useState } from 'react'
import { FC } from 'react'
import { cartStore } from '../../../store/CartStateStore'
import { TAddItemCartStore, TProductPageData } from '../../../types'
import { ProductCounter } from './ProductCounter'
import { ProductInStock } from './ProductInStock'
import { ProductOldPrice } from './ProductOldPrice'
import { ProductPrice } from './ProductPrice'

type TProductInfo = { data: TProductPageData }

const ProductInfo: FC<TProductInfo> = ({ data }): ReactElement => {
  const [cartData, setCartData] = useState<TAddItemCartStore>({
    id: data.id,
    name: data.name,
    img: data.images.preview,
    price: data.price,
    count: 1,
  })

  const setCount = (value: number): void => {
    const newObj = { ...cartData }
    newObj.count = value
    setCartData(newObj)
  }

  return (
    <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0 text-gray-600">
      <div className="flex mb-1 mt-1 text-sm text-green-600 mx-auto">
        <ProductInStock status={data.status} />
      </div>
      {data.oldPrice ? <ProductOldPrice price={data.oldPrice} /> : null}
      <ProductPrice price={data.price} />
      <div className="my-1">
        {data.supplier ? <div>Производитель: {data.supplier}</div> : null}
        {data.vendorId ? <div>Код поставщика: {data.vendorId}</div> : null}
      </div>
      <div className="border"></div>
      <ProductCounter callback={setCount} />

      <div className="flex flex-wrap my-2">
        <button
          className="item_add border-2 border-blue-600
        hover:border-blue-700 shadow hover:shadow-lg duration-500 flex
        text-white bg-blue-500 py-2 px-6 focus:outline-none
        hover:bg-blue-400 rounded"
          id="s1"
          onClick={() => (cartStore.addItem = cartData)}
        >
          В корзину
        </button>
        <button
          className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0
        inline-flex items-center justify-center text-gray-600 ml-4"
        >
          <svg
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ProductInfo
