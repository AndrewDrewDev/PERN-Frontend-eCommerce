import { ReactElement } from 'react'
import { FC } from 'react'
import { TShowHideComponent } from '../../../types'

const RightCartMenuBar: FC<TShowHideComponent> = ({
  show,
  setShow,
}): ReactElement => {
  const CartItem: FC = (): ReactElement => {
    return (
      <div className="simpleCart_items">
        <div className="itemContainer flex justify-between mt-6">
          <div className="item_ID hidden">G03</div>
          <div className="flex">
            <div className="px-2">
              <div className="bg-gray-400">
                <a className="cursor-pointer">
                  <img
                    alt="Placeholder"
                    className="itemThumb"
                    src="https://siteup.com.ua/demo/msk/tupperware/img-product/G03-0m.jpg"
                    style={{
                      maxHeight: '20mm',
                      minWidth: '20mm',
                    }}
                  />
                </a>
              </div>
            </div>
            <div className="mx-3">
              <a href="/product/G03.html">
                <h3
                  className="itemName hover:underline font-medium text-sm 
                    text-gray-600"
                >
                  Универсальное сито «Шинуа»
                </h3>
              </a>
              <div className="flex items-center mt-2">
                <button
                  className="itemincrement text-gray-600 
                    focus:outline-none focus:text-gray-600"
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
                <span className="text-gray-700 mx-2">1</span>
                <button
                  className="itemdecrement text-gray-600 
                    focus:outline-none focus:text-gray-600"
                >
                  <svg
                    className="itemdecrement h-5 w-5"
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
                <button className="text-gray-600 focus:outline-none focus:text-gray-600 pl-4">
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
              <span className="block text-gray-600">Цена: 499</span>
              <span className="block text-gray-600">Всего: 499.00</span>
            </div>
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
            <div className="itemContainer flex justify-between mt-6">
              <div className="item_ID hidden">G03</div>
              <div className="flex">
                <div className="px-2">
                  <div className="bg-gray-400">
                    <a className="cursor-pointer">
                      <img
                        alt="Placeholder"
                        className="itemThumb"
                        src="https://siteup.com.ua/demo/msk/tupperware/img-product/G03-0m.jpg"
                        style={{
                          maxHeight: '20mm',
                          minWidth: '20mm',
                        }}
                      />
                    </a>
                  </div>
                </div>
                <div className="mx-3">
                  <a href="/product/G03.html">
                    <h3
                      className="itemName hover:underline font-medium text-sm 
                    text-gray-600"
                    >
                      Универсальное сито «Шинуа»
                    </h3>
                  </a>
                  <div className="flex items-center mt-2">
                    <button
                      className="itemincrement text-gray-600 
                    focus:outline-none focus:text-gray-600"
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
                    <span className="text-gray-700 mx-2">1</span>
                    <button
                      className="itemdecrement text-gray-600 
                    focus:outline-none focus:text-gray-600"
                    >
                      <svg
                        className="itemdecrement h-5 w-5"
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
                    <button className="text-gray-600 focus:outline-none focus:text-gray-600 pl-4">
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
                  <span className="block itemPrice text-gray-600">
                    Цена: 499
                  </span>
                  <span className="block text-gray-600">Всего: 499.00</span>
                </div>
              </div>
            </div>
          </div>
          {/* cart items */}
          <button
            className="block mx-auto border-2 border-blue-600
           hover:border-blue-700 shadow hover:shadow-lg duration-500 mt-3 
           px-1 py-0.5 bg-blue-600 text-white text-sm font-medium rounded
            hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
          >
            <span>Очистить Корзину</span>
          </button>
          <div className="mt-3 text-gray-700">
            <div>
              Сумма Товара: <span className="simpleCart_total">499.00₽</span>
            </div>
            <div className="">
              Количество: <span className="simpleCart_quantity">1</span> шт.
            </div>
            <hr className="mt-1 mb-1" />
            <div className="">
              Итого: <span className="simpleCart_finalTotal">499.00₽</span>
            </div>
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

export { RightCartMenuBar }
