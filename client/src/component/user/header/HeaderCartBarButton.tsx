import { ReactElement } from 'react'
import { FC } from 'react'
 
const HeaderCartBarButton: FC = (): ReactElement => {
  return (
    <div className="flex items-center justify-end w-full">
      <button className="fixed p-1 duration-500 hover:bg-blue-500 border-2 border-blue-600 shadow hover:shadow-lg focus:outline-none sm:mx-0 rounded-full flex items-center justify-center bg-blue-600 text-white z-30">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
        <span className="simpleCart_quantity cursor-pointer rounded-full h-5 w-5 flex items-center justify-center bg-red-600 text-white text-xs">
          4
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
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"></path>
          </svg>
        </div>
        <div className="-mx-3 py-2 px-4">
          <div className="mx-3">
            <span className="text-green-500 font-semibold">
              Добавлено в Корзину
            </span>
            <p className="text-gray-600 text-sm">
              Товар был добавлен в конзину!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HeaderCartBarButton }
