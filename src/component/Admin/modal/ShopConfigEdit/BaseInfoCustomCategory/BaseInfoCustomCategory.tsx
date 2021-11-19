import { FC, useEffect, useState } from 'react'
import ShopApi from '../../../../../http/ShopApi'
import {
  TLabelCategoryNames,
  TShopCustomCategoryProducts,
} from '../../../../../types'
import './BaseInfoCustomCategory.css'
import { shopConfigEditModalState } from '../../../../../store/ShopConfigEditModalState'
import { AddProductPopup } from './AddProductPopup'
import { CustomCategoryList } from './CustomCategoryList'
import { observer } from 'mobx-react-lite'

const BaseInfoCustomCategory: FC<{ categoryName: TLabelCategoryNames }> =
  observer(({ categoryName }) => {
    const [popupShow, setPopupShow] = useState(false)
    const [products, setProducts] = useState<TShopCustomCategoryProducts>()

    const update = shopConfigEditModalState.update
    useEffect(() => {
      ShopApi.fetchCustomCategoryProducts(categoryName).then(data => {
        setProducts(data)
      })
    }, [update])

    return (
      <>
        <div className="w-1/2 my-2 ">
          <div className="flex items-center w-96 text-xl text-center py-1 my-2">
            <span>Пользовательская категория: </span>
            <span className="text-gray-700 text-xl ml-2 font-bold">
              {categoryName}
            </span>
            <div className="relative">
              <button
                className="ml-3 bg-green-500 border-2 border-green-600
                rounded-lg text-white"
                type="button"
                onClick={() => setPopupShow(!popupShow)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
              {popupShow && (
                <AddProductPopup
                  show={popupShow}
                  setShow={setPopupShow}
                  categoryName={categoryName}
                />
              )}
            </div>
          </div>
          <div>
            {products && products.length !== 0 ? (
              <CustomCategoryList
                categoryName={categoryName}
                products={products}
              />
            ) : (
              <div className="text-center text-lg">Пусто</div>
            )}
          </div>
        </div>
      </>
    )
  })
export { BaseInfoCustomCategory }
