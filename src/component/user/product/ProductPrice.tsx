import { FC } from "react"
import { ReactElement } from "react"
import { Td802_exPriceSell } from "../../../types"

type TProductPrice = {
    price: Td802_exPriceSell
}

const ProductPrice: FC<TProductPrice> = ({ price }): ReactElement => {
    return (
    <div className="mx-auto mb-1">
        <div className="text-xl text-gray-700">
            Цена:{' '}
            <span
                className="item_price title-font font-medium text-2xl
          text-red-500"
            >
                {price} руб.
            </span>
        </div>
    </div>
    )
}

export {
    ProductPrice
}
