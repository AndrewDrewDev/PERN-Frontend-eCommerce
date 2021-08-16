import { FC } from "react"
import { ReactElement } from "react"

const ProductOldPrice: FC = (): ReactElement => {
    return (
        <div className="mx-auto mt-1" >
            <div className="text-lg text-gray-700">
                Старая Цена:
                <span
                    className="title-font ml-2 line-through font-medium text-xl
           text-gray-600"
                >
                    2969.00 руб.
                </span>
            </div>
        </div >
    )
}
