import { FC } from 'react'
import { ReactElement } from 'react'
import { shopConfigStore } from '../../store/ShopConfigStore'
import { observer } from 'mobx-react-lite'

type TProductOldPrice = {
  price: string
}

const ProductOldPrice: FC<TProductOldPrice> = observer(
  ({ price }): ReactElement => {
    return (
      <div className="mx-auto mt-1">
        <div className="text-lg text-gray-700">
          Старая Цена:
          <span
            className="title-font ml-2 line-through font-medium text-xl
           text-gray-600"
          >
            {price} {shopConfigStore.config.currency}
          </span>
        </div>
      </div>
    )
  }
)

export { ProductOldPrice }
