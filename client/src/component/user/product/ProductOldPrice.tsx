import { FC } from "react"
import { ReactElement } from "react"
import { Td803_exPriceOldSell } from "../../../types"

type TProductOldPrice = {
    price: Td803_exPriceOldSell
}

const ProductOldPrice: FC<TProductOldPrice> = ({ price }): ReactElement => {
    return (
        <div className="mx-auto mt-1" >
            <div className="text-lg text-gray-700">
                Старая Цена:
                <span
                    className="title-font ml-2 line-through font-medium text-xl
           text-gray-600"
                >
                    {price} руб.
                </span>
            </div>
        </div >
    )
}

export {
    ProductOldPrice
}
