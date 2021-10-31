import { observer } from 'mobx-react-lite'
import { useTransition, animated, config } from 'react-spring'
import { MouseEventHandler, ReactElement } from 'react'
import { FC } from 'react'

import { cartStore } from '../../../store/CartStateStore'
import { modalStateStore } from '../../../store/ModalStateStore'

type THeaderCartBarButton = {
  onClick: MouseEventHandler
}

const HeaderCartBarButton: FC<THeaderCartBarButton> = observer(
  ({ onClick }): ReactElement => {
    const transition = useTransition(
      modalStateStore.addProductToCartNotifyState,
      {
        from: { y: -200, opacity: 0 },
        enter: { y: 0, opacity: 1 },
        leave: { y: -200, opacity: 0 },
        config: config.wobbly,
      }
    )

    return (
      <div className="relative flex items-center justify-end w-full">
        <button
          className="fixed p-1 duration-500 hover:bg-blue-500 border-2 border-blue-600 shadow hover:shadow-lg focus:outline-none sm:mx-0 rounded-full flex items-center justify-center bg-blue-600 text-white z-30"
          onClick={onClick}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span className="cursor-pointer rounded-full h-5 w-5 flex items-center justify-center bg-red-600 text-white text-xs">
            {cartStore.getFinalCount}
          </span>
        </button>
        <div
          id="addToCardNotification"
          className="fixed hidden top-0 right-0 my-6 xl:mx-5 lg:mx-15 z-50 ml-10 flex max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden"
        >
          <div className="flex justify-center items-center w-12 bg-green-500">
            <svg
              className="h-6 w-6 fill-current text-white"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
            </svg>
          </div>
          <div className="-mx-3 py-2 px-4">
            <div className="mx-3">
              <span className="text-green-500 font-semibold">
                Добавлено в Корзину
              </span>
              <p className="text-gray-600 text-sm">
                Товар был добавлен в корзину!
              </p>
            </div>
          </div>
        </div>
        {transition((style, item) =>
          item ? (
            <animated.div
              className="fixed bg-white shadow-md rounded-lg flex max-w-sm overflow-hidden z-50"
              style={style}
            >
              <div className="flex justify-center items-center w-12 bg-green-500">
                <svg
                  className="h-6 w-6 fill-current text-white"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                </svg>
              </div>
              <div className="-mx-3 py-2 px-4">
                <div className="mx-3">
                  <span className="text-green-500 font-semibold">
                    Добавлено в Корзину
                  </span>
                  <p className="text-gray-600 text-sm">
                    Товар был добавлен в корзину!
                  </p>
                </div>
              </div>
            </animated.div>
          ) : null
        )}
      </div>
    )
  }
)

export { HeaderCartBarButton }
