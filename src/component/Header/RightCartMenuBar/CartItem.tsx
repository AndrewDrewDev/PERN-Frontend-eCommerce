import { FC, ReactElement } from "react";
import { TItemsCartStore } from "../../../types";
import { Link } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../../routes/routes";
import { cartStore } from "../../../store/CartStateStore";
import { shopConfigStore } from "../../../store/ShopConfigStore";

const CartItem: FC<TItemsCartStore> = ({
                                         id,
                                         name,
                                         price,
                                         priceAll,
                                         img,
                                         count,
                                       }): ReactElement => {
  return (
    <div className="flex justify-between mt-6">
      <div className="flex">
        <div className="px-2">
          <div className="bg-gray-400">
            <Link className="cursor-pointer" to={PRODUCT_ROUTE + '/' + id}>
              <img
                alt="Placeholder"
                src={process.env.REACT_APP_API_URL + img}
                style={{
                  maxHeight: '20mm',
                  minWidth: '20mm',
                }}
              />
            </Link>
          </div>
        </div>
        <div className="mx-3">
          <Link to={PRODUCT_ROUTE + '/' + id}>
            <h3
              className="itemName hover:underline font-medium text-sm
                      text-gray-600"
            >
              {name}
            </h3>
          </Link>
          <div className="flex items-center mt-2">
            <button
              className="text-gray-600 focus:outline-none focus:text-gray-600"
              onClick={() => (cartStore.increaseItem = id)}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <span className="text-gray-700 mx-2">{count}</span>
            <button
              className=" text-gray-600 focus:outline-none focus:text-gray-600"
              onClick={() => (cartStore.decreaseItem = id)}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button
              className="text-gray-600 focus:outline-none
                focus:text-gray-600 pl-4"
              onClick={() => (cartStore.removeItem = id)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org01/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <span className="block text-gray-600">
            Цена: {price} {shopConfigStore.config.currency}
          </span>
          <span className="block text-gray-600">
            Всего: {priceAll} {shopConfigStore.config.currency}
          </span>
        </div>
      </div>
    </div>
  )
}
export {CartItem }