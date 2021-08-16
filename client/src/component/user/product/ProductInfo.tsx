import { ReactElement } from 'react'
import { FC } from 'react'
import { TFullProductData } from '../../../types'
import { ProductCounter } from './ProductCounter'
import { ProductInStock } from './ProductInStock'
import { ProductOldPrice } from './ProductOldPrice'
import { ProductPrice } from './ProductPrice'

type TDescription = { data: TFullProductData }

const ProductInfo: FC<TDescription> = ({ data }): ReactElement => {
    return (
        <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0 text-gray-600">
            <div className="flex mb-1 mt-1 text-sm text-green-600 mx-auto">
                <ProductInStock status={data.d722_exProductInStock} />
            </div>
            {data.d803_exPriceOldSell ? <ProductOldPrice price={data.d803_exPriceOldSell} /> : null}
            <ProductPrice price={data.d802_exPriceSell} />
            <div className="my-1">
                {data.d738_exProductManufacturer ? <div>Производитель: {data.d738_exProductManufacturer}</div> : null}
                {data.d747_exProductCodeVender ? <div>Код поставщика: {data.d747_exProductCodeVender}</div> : null}
            </div>
            <div className="border"></div>
            <ProductCounter />

            <div className="flex flex-wrap my-2">
                <button
                    className="item_add border-2 border-blue-600
        hover:border-blue-700 shadow hover:shadow-lg duration-500 flex
        text-white bg-blue-500 py-2 px-6 focus:outline-none
        hover:bg-blue-400 rounded"
                    id="s1"
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
            <div className="border"></div>
            <div className="flex my-2">
                <div className="flex items-center text-gray-600">Поделиться</div>
                <div className="flex py-2 ml-3 pl-1 border-l-2">
                    <a className="text-gray-600">
                        <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a className="ml-2 text-gray-600">
                        <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>{' '}
                    </a>
                    <a className="ml-2 text-gray-600">
                        <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export { ProductInfo }
