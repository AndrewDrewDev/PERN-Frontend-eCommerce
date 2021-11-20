import { ReactElement } from 'react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCT_ROUTE } from '../../routes'
import { cartStore } from '../../store/CartStateStore'
import {
  TAddItemCartStore,
  TMainProductsData,
  TLabelCategoryNames,
} from '../../types'
import { REACT_API_URL } from '../../config'
import { modalStateStore } from '../../store/ModalStateStore'
import { observer } from 'mobx-react-lite'
import { shopConfigStore } from '../../store/ShopConfigStore'
import { AdminEditButton } from '../Admin/button/AdminEditButton'

type TProductCard = {
  product: TMainProductsData
}

type TLabelNewOrDiscount = {
  label: TLabelCategoryNames
}

const ProductCard: FC<TProductCard> = observer(({ product }): ReactElement => {
  const { name, img, price, id, label, old_price } = product
  const cartData: TAddItemCartStore = {
    id,
    name,
    img,
    price,
  }
  const LabelNewOrDiscount: FC<TLabelNewOrDiscount> = ({
    label,
  }): ReactElement | null => {
    if (label === 'Акции') {
      return (
        <div
          className="absolute top-0 left-0 -mx-8 my-8 px-12 transform
        -rotate-45 bg-red-500 text-sm whitespace-no-wrap text-white
        uppercase font-medium border-2 border-red-800"
        >
          акция
        </div>
      )
    } else if (label === 'Новинки') {
      return (
        <div
          className="absolute top-0 left-0 -mx-8 my-8 px-12 transform
        -rotate-45 bg-blue-500 text-sm whitespace-no-wrap text-white
         uppercase font-medium border-2 border-blue-800"
        >
          новинка
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <>
      <div
        className="container mx-auto max-w-xs rounded-lg overflow-hidden
      shadow-lg bg-white"
      >
        <div className="relative flex items-end justify-center min-h-64 h-64">
          <Link
            className="transform scale-100 hover:scale-110 duration-500
            ease-in-out"
            to={PRODUCT_ROUTE + '/' + id}
          >
            <img
              className="object-contain w-full m-auto h-64"
              alt="Loading..."
              src={REACT_API_URL + img}
            />
          </Link>
          <LabelNewOrDiscount label={label} />

          <div
            className="absolute z-20 bottom-0 right-0 -mb-4"
            style={{
              marginRight: '8.5rem',
            }}
          >
            <AdminEditButton
              onClickHandler={() =>
                (modalStateStore.productEditModalState = {
                  isShowing: true,
                  productId: id,
                })
              }
            />
          </div>

          <button
            className="shadow hover:shadow-lg duration-500
            absolute z-20 bottom-0 right-0 -mb-4 p-2 rounded-full
          bg-blue-600 text-white hover:bg-blue-500 focus:outline-none
          focus:bg-blue-500"
            style={{
              marginRight: '6rem',
            }}
            onClick={() =>
              (modalStateStore.productQuickViewWidgetState = {
                isShowing: true,
                productId: id,
              })
            }
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
          <button
            className="absolute shadow hover:shadow-lg duration-500 z-20
             bottom-0 right-0 -mb-4 p-2 rounded-full bg-blue-600 text-white
              hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            style={{
              marginRight: '3.5rem',
            }}
            onClick={() =>
              (modalStateStore.productSliderWidgetState = {
                isShowing: true,
                productId: id,
              })
            }
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
          </button>
          <button
            className="shadow hover:shadow-lg duration-500 z-20 absolute
            bottom-0 right-0 -mb-4 p-2 rounded-full bg-blue-600 text-white
          hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            style={{
              marginRight: '1rem',
            }}
            onClick={() => (cartStore.addItem = cartData)}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
        <div className="px-5 py-3 bg-white relative z-10">
          <div>
            <h3 className="text-gray-700">{name}</h3>
          </div>
          <span className="font-bold text-gray-800 mt-2">
            {price} {shopConfigStore.config.currency}
          </span>
          {old_price ? (
            <span className="mx-1 line-through text-gray-600 mt-2">
              {old_price} {shopConfigStore.config.currency}
            </span>
          ) : null}
        </div>
      </div>
    </>
  )
})

export { ProductCard }
