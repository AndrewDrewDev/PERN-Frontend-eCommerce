import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { ReactElement } from 'react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCT_ROUTE } from '../../../routes'
import { cartStore } from '../../../store/CartStateStore'
import { TItemsCartStore, TShowHideComponent } from '../../../types'
import config from '../../../config'

const RightCartMenuBar: FC<TShowHideComponent> = observer(
  ({ show, setShow }): ReactElement => {
    const CartItem: FC<TItemsCartStore> = ({
      id,
      name,
      price,
      priceAll,
      img,
      count,
    }): ReactElement => {
      return (
        <div className="flex justify-between mt-6">
          <div className="flex">
            <div className="px-2">
              <div className="bg-gray-400">
                <Link className="cursor-pointer" to={PRODUCT_ROUTE + '/' + id}>
                  <img
                    alt="Placeholder"
                    src={config.REACT_API_URL + img}
                    style={{
                      maxHeight: '20mm',
                      minWidth: '20mm',
                    }}
                  />
                </Link>
              </div>
            </div>
            <div className="mx-3">
              <Link to={PRODUCT_ROUTE + '/' + id}>
                <h3
                  className="itemName hover:underline font-medium text-sm 
                      text-gray-600"
                >
                  {name}
                </h3>
              </Link>
              <div className="flex items-center mt-2">
                <button
                  className="text-gray-600 focus:outline-none focus:text-gray-600"
                  onClick={() => (cartStore.increaceItem = id)}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
                <span className="text-gray-700 mx-2">{count}</span>
                <button
                  className=" text-gray-600 focus:outline-none 
                  focus:text-gray-600"
                  onClick={() => (cartStore.decreaceItem = id)}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
                <button
                  className="text-gray-600 focus:outline-none 
                focus:text-gray-600 pl-4"
                  onClick={() => (cartStore.removeItem = id)}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org01/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </div>
              <span className="block text-gray-600">Цена: {price}</span>
              <span className="block text-gray-600">Всего: {priceAll}</span>
            </div>
          </div>
        </div>
      )
    }

    return (
      <>
        {show ? (
          <div
            className="fixed z-40 right-0 top-0 max-w-xs w-full h-full px-6 
          py-4 transition duration-300 transform overflow-y-auto 
          bg-white border-l-2 border-gray-300"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-medium text-gray-700">
                Ваша Корзина:
              </h3>
              <button
                className="border-2 duration-500 border-white 
              focus:outline-none hover:border-red-500 p-1 
              hover:text-white hover:bg-red-400 rounded-full
               text-gray-600 focus:outline-none"
                onClick={() => setShow(false)}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <hr className="my-3" />
            <div className="simpleCart_items">
              {cartStore.getItems.map(item => (
                <CartItem
                  {...{
                    id: item.id,
                    name: item.name,
                    img: item.img,
                    price: item.price,
                    priceAll: item.priceAll,
                    count: item.count,
                  }}
                />
              ))}
            </div>
            <button
              className="block mx-auto border-2 border-blue-600
             hover:border-blue-700 shadow hover:shadow-lg duration-500 mt-3 
             px-1 py-0.5 bg-blue-600 text-white text-sm font-medium rounded
              hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              <span>Очистить Корзину</span>
            </button>
            <div className="mt-3 text-gray-700">
              <div>Сумма Товара: {cartStore.getFinalTotal}₽</div>
              <div className="">Количество: {cartStore.getFinalCount} шт.</div>
              <hr className="mt-1 mb-1" />
              <div className="">Итого: {cartStore.getFinalTotal}₽</div>
            </div>

            <a
              href="https://siteup.com.ua/demo/msk/tupperware/checkout"
              className="flex border-2 border-blue-600 hover:border-blue-700
               shadow hover:shadow-lg duration-500 mb-5 text-lg items-center
                justify-center mt-4 px-3 py-1 bg-blue-600 text-white text-sm
                 font-medium rounded hover:bg-blue-500 focus:outline-none
                  focus:bg-blue-500"
            >
              <span>Перейти к Оплате</span>
              <svg
                className="h-5 w-5 mx-2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        ) : null}
      </>
    )
  }
)

export { RightCartMenuBar }
