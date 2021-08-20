import { FC, ReactElement } from 'react'
import { HeaderNavPanelCartButton } from './HeaderNavPanelCartButton'

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
      <HeaderNavPanelCartButton />
    </nav>
  )
}

export { HeaderNavPanel }
