import { FC } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import { NavPanelCartButton } from '../NavPanelCartButton/NavPanelCartButton'

import s from './NavPanel.module.css'

const NavPanel: FC = () => {
  const linkStyle = cn(s.animate_underline, 'mt-1 mx-2')
  return (
    <nav className="relative hidden md:flex justify-center items-center whitespace-nowrap font-semibold text-gray-700">
      <Link to="/" className={linkStyle}>
        Главная
      </Link>
      <Link to="/catalog" className={linkStyle}>
        Каталог
      </Link>
      <Link to="/label/Aktsii" className={linkStyle}>
        Акции
      </Link>
      <Link to="/label/Novinki" className={linkStyle}>
        Новинки
      </Link>
      <Link to="/info/about" className={linkStyle}>
        О Магазине
      </Link>
      <Link to="/info/payment" className={linkStyle}>
        Оплата
      </Link>
      <Link to="/info/delivery" className={linkStyle}>
        Доставка
      </Link>
      <div className={linkStyle}>
        <NavPanelCartButton />
      </div>
    </nav>
  )
}

export { NavPanel }
