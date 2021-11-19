import { observer } from 'mobx-react-lite'
import { ReactElement } from 'react'
import { FC } from 'react'
import { cartStore } from '../../../store/CartStateStore'
import { Link } from 'react-router-dom'
import { shopConfigStore } from '../../../store/ShopConfigStore'
import cn from 'classnames'

const NavPanelCartButton: FC = observer((): ReactElement => {
  return (
    <>
      <Link to="/payment" className={cn('flex items-center justify-center')}>
        <div>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="mx-1">
          <span>{cartStore.getFinalCount} шт. </span>
          <span>
            {cartStore.getFinalTotal} {shopConfigStore.config.currency}
          </span>
        </div>
      </Link>
    </>
  )
})

export { NavPanelCartButton }
