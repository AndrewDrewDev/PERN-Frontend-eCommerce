import { observer } from 'mobx-react-lite'
import { Dispatch, ReactElement, SetStateAction } from "react";
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { cartStore } from '../../../store/CartStateStore'
import { shopConfigStore } from '../../../store/ShopConfigStore'
import { useTransition, animated, config } from 'react-spring'
import { nanoid } from 'nanoid'
import { CartItem } from "./CartItem";
import { EmptyItem } from "./EmptyItem";

interface RightCartMenuBarProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}
const RightCartMenuBar: FC<RightCartMenuBarProps> = observer(
  ({ show, setShow }): ReactElement => {
    const modalTransition = useTransition(show, {
      from: { x: 100, opacity: 0 },
      enter: { x: 0, opacity: 1 },
      leave: { x: 100, opacity: 0 },
      config: config.gentle,
    })

    const bgTransition = useTransition(show, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    })

    return (
      <>
        {bgTransition(
          (style, item) =>
            item && (
              <animated.div
                key={nanoid()}
                className="fixed z-50 inset-0 h-screen w-screen bg-black
                bg-opacity-75"
                onClick={() => setShow(false)}
                style={style}
              >
                {modalTransition((style, item) => {
                  return (
                    item && (
                      <animated.div
                        className="fixed z-40 right-0 top-0 max-w-xs w-full
                        h-full px-6 py-4 overflow-y-auto pretty-scroll bg-white
                        border-l-2 border-gray-300"
                        key={nanoid()}
                        style={style}
                        onClick={e => e.stopPropagation()}
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
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <hr className="my-1 border-gray-700" />
                        <div className="simpleCart_items">
                          <div className="text-center text-gray-700 font-thin my-1">
                            Ваш заказ:
                          </div>
                          {cartStore.getItems.map(item => (
                            <CartItem
                              key={nanoid()}
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
                          {cartStore.getItems.length === 0 ? (
                            <EmptyItem />
                          ) : null}
                        </div>
                        <button
                          className="block mx-auto border-2 border-blue-600
             hover:border-blue-700 shadow hover:shadow-lg duration-500 mt-3
             px-1 py-0.5 bg-blue-600 text-white text-sm font-medium rounded
              hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                          onClick={() => cartStore.removeAll()}
                        >
                          Очистить Корзину
                        </button>
                        <div className="mt-3 text-gray-700">
                          <div>
                            Сумма Товара: {cartStore.getFinalTotal}{' '}
                            {shopConfigStore.config.currency}
                          </div>
                          <div className="">
                            Количество: {cartStore.getFinalCount} шт.
                          </div>
                          <hr className="mt-1 mb-1" />
                          <div className="">
                            Итого: {cartStore.getFinalTotal}{' '}
                            {shopConfigStore.config.currency}
                          </div>
                        </div>

                        <div onClick={() => setShow(false)}>
                          <Link
                            to="/payment"
                            className="flex border-2 border-blue-600
                            shadow hover:shadow-lg duration-500 mb-5 text-lg
                            justify-center mt-4 px-3 py-1 bg-blue-600 text-white
                            font-medium rounded hover:bg-blue-500
                            focus:bg-blue-500 hover:border-blue-700 items-center
                            text-sm focus:outline-none"
                          >
                            <span>Перейти к Оплате</span>
                            <svg
                              className="h-5 w-5 mx-2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </animated.div>
                    )
                  )
                })}
              </animated.div>
            )
        )}
      </>
    )
  }
)

export { RightCartMenuBar }
