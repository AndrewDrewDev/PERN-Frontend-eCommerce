import { ReactElement } from 'react'
import { FC } from 'react'
import { TMainProductsData } from '../../../store/MainPageStore'

type TProductCard = {
  data: TMainProductsData
}

type TLabelNewOrDiscount = {
  discountTag: string,
  newTag: string
}

const ProductCard: FC<TProductCard> = ({ data }): ReactElement => {

  const LabelNewOrDiscount: FC<TLabelNewOrDiscount> = ({ discountTag, newTag }): ReactElement | null => {
    if (discountTag) {
      return <div className="absolute top-0 left-0 -mx-8 my-8 px-12 transform -rotate-45 bg-red-500 text-sm whitespace-no-wrap text-white uppercase font-medium border-2 border-red-800">акция</div >
    } else if (newTag) {
      return <div className="absolute top-0 left-0 -mx-8 my-8 px-12 transform -rotate-45 bg-blue-500 text-sm whitespace-no-wrap text-white uppercase font-medium border-2 border-blue-800">новинка</div >
    } else {
      return null
    }
  }

  return (
    <>
      <div className="simpleCart_shelfItem container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">

        <div className="relative flex items-end justify-center min-h-64 h-64">
          <a className="transform scale-100 hover:scale-110 duration-500 ease-in-out" href="#">
            <img className="object-contain w-full m-auto h-64" alt="Loading..." src={data.REST_img} />
          </a>
          <LabelNewOrDiscount
            discountTag={data.d735_exProductDiscounts}
            newTag={data.d734_exProductNew}
          />
          <button className="invisible shadow hover:shadow-lg duration-500 lg:visible absolute z-20 bottom-0 right-0 -mb-4 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            style={{
              marginRight: '6rem'
            }}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </button>
          <button className="absolute shadow hover:shadow-lg duration-500 z-20 bottom-0 right-0 -mb-4 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 focus:outline-none focus:bg-blue-500" style={{
            marginRight: '3.5rem'
          }}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
            </svg>
          </button>
          <button className="shadow hover:shadow-lg duration-500 z-20 absolute bottom-0 right-0 -mb-4 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            style={{
              marginRight: '1rem'
            }} >
            <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </button>
        </div>
        <div className="px-5 py-3 bg-white relative z-10">
          <a href="#">
            <h3 className="text-gray-700">{data.d721_exProductName}</h3>
          </a>
          <span className="font-bold text-gray-800 mt-2">${data.d802_exPriceSell} руб.</span>
          {data.d803_exPriceOldSell ? <span className="mx-1 line-through text-gray-600 mt-2">{data.d803_exPriceOldSell} руб.</span> : null}
        </div>
      </div>

    </>
  )
}

export { ProductCard }
