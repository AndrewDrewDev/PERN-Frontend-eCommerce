import { ReactElement } from 'react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { shopConfigStore } from '../../store/ShopConfigStore'

const Footer: FC = (): ReactElement => {
  const { config } = shopConfigStore

  return (
    <footer className="bg-gray-200 mt-3">
      <div className="max-w-6xl m-auto text-gray-600 flex flex-wrap justify-center">
        <div className="p-5 w-48">
          <div className="text-xs uppercase text-gray-700 font-medium">
            Основные Разделы
          </div>
          <Link className="mt-2 hover:underline block" to="/info/about">
            О Магазине
          </Link>{' '}
          <Link className="mt-2 hover:underline block" to="/info/public-offer">
            Публичная оферта
          </Link>{' '}
          <Link className="mt-2 hover:underline block" to="/info/warranty">
            Гарантия
          </Link>
        </div>
        <div className="p-5 w-48">
          <div className="text-xs uppercase text-gray-700 font-medium">
            Каталог
          </div>
          <Link className="mt-2 hover:underline block" to="/catalog">
            Каталог Товаров
          </Link>{' '}
          <Link className="mt-2 hover:underline block" to="/label/Aktsii">
            Акция-Скидки
          </Link>{' '}
          <Link className="mt-2 hover:underline block" to="/label/Novinki">
            Новинки
          </Link>
        </div>
        <div className="p-5 w-48">
          <div className="text-xs uppercase text-gray-700 font-medium">
            Оплата-Доставка
          </div>
          <Link className="mt-2 hover:underline block" to="/info/faqs">
            Вопросы-Ответы
          </Link>{' '}
          <Link className="mt-2 hover:underline block" to="/info/delivery">
            Доставка
          </Link>{' '}
          <Link className="mt-2 hover:underline block" to="/info/payment">
            Оплата
          </Link>
        </div>
        <div className="p-5 w-48">
          <div className="text-xs uppercase text-gray-700 font-medium text-center">
            Соц. сети
          </div>
          <div className="mt-4 grid grid-cols-4 gap-1 fill-current text-gray-600 items-center">
            <a className="cursor-pointer hover:text-gray-400" href="#">
              <svg
                width="20pt"
                height="20pt"
                viewBox="0 0 31.599998474121094 27.200000762939453"
              >
                <path d="M28.6.6L.9 11.6c-.9.3-.8 1.6.1 1.9l7 2.2 2.8 8.8c.2.7 1.1.9 1.6.4l4.1-3.8 7.8 5.7c.6.4 1.4.1 1.6-.6L31.3 3c.3-1.7-1.2-3-2.7-2.4zM12.4 17.4l-.9 5.2-2-7.2L29 2.6 12.4 17.4z" />
              </svg>{' '}
            </a>
            <svg width="20pt" height="20pt" viewBox="0 0 576 512">
              <path d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z" />
            </svg>{' '}
            <svg
              className="cursor-pointer hover:text-gray-400"
              width="20pt"
              height="20pt"
              viewBox="0 0 17.867000579833984 38"
            >
              <path d="M3.966 7.36C3.966 8.317 4 13 4 13H0v6l3.966-.011L4 38h8V19l5.124-.011s.387-2.635.626-5.989H12s-.13-4.155-.13-4.807c0-.653.858-1.533 1.707-1.533h4.29V0h-5.833C3.772 0 3.966 6.403 3.966 7.36z" />
            </svg>{' '}
            <svg
              className="cursor-pointer hover:text-gray-400"
              width="20pt"
              height="20pt"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>{' '}
            <svg
              className="cursor-pointer hover:text-gray-400"
              width="20pt"
              height="20pt"
              viewBox="0 0 18.599998474121094 30.599998474121094"
            >
              <path d="M9.3 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0-12.2C7 3.8 5.1 5.7 5.1 8s1.9 4.2 4.2 4.2 4.2-1.9 4.2-4.2-1.9-4.2-4.2-4.2z" />
              <path d="M17.9 16.8c-.7-.9-1.9-1-2.8-.4 0 0-2.2 1.6-5.8 1.6-3.6 0-5.8-1.6-5.8-1.6-.9-.7-2.1-.5-2.8.4-.7.9-.5 2.1.4 2.8.1.1 2.2 1.7 5.7 2.2l-5.3 5.4c-.8.8-.8 2.1 0 2.8.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l5-5.1 5 5.1c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.8-.8.8-2 0-2.8l-5.3-5.4c3.5-.6 5.6-2.2 5.7-2.2.9-.7 1.1-2 .4-2.8z" />
            </svg>{' '}
            <svg
              className="cursor-pointer hover:text-gray-400"
              width="20pt"
              height="20pt"
              viewBox="0 0 16 16"
            >
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>{' '}
            <svg
              className="cursor-pointer hover:text-gray-400"
              width="20pt"
              height="20pt"
              viewBox="0 0 448 512"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
            </svg>{' '}
            <svg
              className="cursor-pointer hover:text-gray-400"
              width="20pt"
              height="20pt"
              viewBox="0 0 448 512"
            >
              <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
            </svg>
          </div>
        </div>
        <div className="p-5 w-48">
          <div className="text-xs uppercase text-gray-700 font-medium">
            Контакты
          </div>
          <div className="relative mt-2">
            <svg
              className="absolute w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>{' '}
            <a className="mx-6 text-md whitespace-nowrap" href="#">
              {shopConfigStore.config.email}
            </a>
          </div>
          <div className="relative mt-2">
            <svg
              className="absolute h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                fill="currentColor"
              />
            </svg>{' '}
            <span className="mx-6 text-md whitespace-nowrap">
              {config.address}
            </span>
          </div>
          <div className="relative mt-2">
            <svg
              className="absolute w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>{' '}
            <span className="mx-6 text-md whitespace-nowrap">
              {config.phone}
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="container mx-auto px-6 py-3 flex flex-col justify-between items-center">
        <p className="py-2 text-gray-600 sm:py-0">{config.copyright}</p>
        <p className="font-sx py-2 text-xs text-gray-600 sm:py-0">
          React Build: v05:{Date.now()}
        </p>
      </div>
    </footer>
  )
}

export { Footer }
