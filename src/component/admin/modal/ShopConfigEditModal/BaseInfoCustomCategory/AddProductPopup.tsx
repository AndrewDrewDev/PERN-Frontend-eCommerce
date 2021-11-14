import { Dispatch, FC, SetStateAction, useState } from 'react'
import { TLabelCategoryNames } from '../../../../../types'
import ShopApi from '../../../../../http/ShopApi'
import { categoriesPageStore } from '../../../../../store/CategoryStore'
import { shopConfigEditModalState } from '../../../../../store/ShopConfigEditModalState'

const AddProductPopup: FC<{
  categoryName: TLabelCategoryNames
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}> = ({ categoryName, show, setShow }) => {
  const [popupValue, setPopupValue] = useState('')

  const createProductItem = async (id: string) => {
    await ShopApi.createCustomCategoryProduct(categoryName, {
      data: id,
    })
    setShow(false)
    await categoriesPageStore.updateFetchData()
    shopConfigEditModalState.updating()
  }

  return (
    <div
      className="absolute flex flex-col items-center text-white bg-blue-500
      px-3 py-2 rounded-lg z-10"
    >
      <span className="text-xs py-1">Введите ID товара</span>
      <div className="flex">
        <input
          className="px-2 bg-white rounded-l text-gray-700
                      focus:outline-none w-20"
          type="text"
          name="Введите ID товара"
          value={popupValue}
          onChange={e => setPopupValue(e.target.value)}
        />
        <button
          type="button"
          className="bg-green-500 rounded-r flex items-center"
          onClick={() => createProductItem(popupValue)}
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
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export { AddProductPopup }
