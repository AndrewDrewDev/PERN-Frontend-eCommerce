import { FC } from 'react'
import { ReactElement } from 'react'
import { shopConfigStore } from '../../../store/ShopConfigStore'
import { observer } from 'mobx-react-lite'

type TProductPrice = {
  price: string
}

const ProductPrice: FC<TProductPrice> = observer(({ price }): ReactElement => {
  return (
    <div className="mx-auto mb-1">
      <div className="text-xl text-gray-700">
        <span>Цена: </span>
        <span
          className="item_price title-font font-medium text-2xl
          text-red-500"
        >
          {price} {shopConfigStore.config.currency}
        </span>
      </div>
    </div>
  )
})

export { ProductPrice }
