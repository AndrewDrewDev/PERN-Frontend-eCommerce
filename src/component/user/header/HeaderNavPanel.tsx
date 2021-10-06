import { FC, ReactElement } from 'react'
import { Link } from 'react-router-dom'

import { HeaderNavPanelCartButton } from './HeaderNavPanelCartButton'

const HeaderNavPanel: FC = (): ReactElement => {
  return (
    <nav className="hidden md:flex justify-center items-center whitespace-nowrap font-semibold text-gray-600">
      <Link to="/" className="hover:underline mt-1 mx-2">
        Главная
      </Link>
      <Link to="/catalog" className="hover:underline mt-1 mx-2">
        Каталог
      </Link>
      <Link to="/custom/Aktsii" className="hover:underline mt-1 mx-2">
        Акции
      </Link>
      <Link to="/custom/Novinki" className="hover:underline mt-1 mx-2">
        Новинки
      </Link>
      <Link to="/info/about" className="hover:underline mt-1 mx-2">
        О Магазине
      </Link>
      <Link to="/info/payment" className="hover:underline mt-1 mx-2">
        Оплата
      </Link>
      <Link to="/info/delivery" className="hover:underline mt-1 mx-2">
        Доставка
      </Link>
      <HeaderNavPanelCartButton />
    </nav>
  )
}

export { HeaderNavPanel }
