import { FC, ReactElement } from 'react'

const HeaderNavPanel: FC = (): ReactElement => {
  return (
    <nav className="hidden md:flex justify-center items-center whitespace-nowrap font-semibold text-gray-600">
      <a
        className="hover:underline mt-1 mx-2"
        href="https://siteup.com.ua/demo/msk/tupperware/"
      >
        Главная
      </a>
      <a
        className="hover:underline mt-1 mx-2"
        href="https://siteup.com.ua/demo/msk/tupperware/catalog/grid4.html"
      >
        Каталог
      </a>
      <a
        className="hover:underline mt-1 mx-2"
        href="https://siteup.com.ua/demo/msk/tupperware/discount"
      >
        Акции
      </a>
      <a
        className="hover:underline mt-1 mx-2"
        href="https://siteup.com.ua/demo/msk/tupperware/new"
      >
        Новинки
      </a>
      <a
        className="hover:underline mt-1 mx-2"
        href="https://siteup.com.ua/demo/msk/tupperware/page/about"
      >
        О Магазине
      </a>
      <a
        className="hover:underline mt-1 mx-2"
        href="https://siteup.com.ua/demo/msk/tupperware/page/payment"
      >
        Оплата
      </a>
      <a
        className="hover:underline mt-1 mx-2"
        href="https://siteup.com.ua/demo/msk/tupperware/page/delivery"
      >
        Доставка
      </a>
      <a
        className="hover:underline mt-1 mx-2 relative"
        href="https://siteup.com.ua/demo/msk/tupperware/checkout"
      >
        <svg
          className="absolute w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div className="mx-6">
          <span className="simpleCart_quantity">4</span>
          <span> шт.</span>
          <span className="simpleCart_finalTotal">19,196.00₽</span>
        </div>
      </a>
    </nav>
  )
}

export {
  HeaderNavPanel
}