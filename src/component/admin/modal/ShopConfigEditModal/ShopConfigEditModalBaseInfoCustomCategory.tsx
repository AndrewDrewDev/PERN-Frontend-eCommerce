import { FC, useEffect, useState } from 'react'
import { TShopCustomCategoryProducts } from '../../../../types'
import ShopApi from '../../../../http/ShopApi'
import config from '../../../../config'
import { categoriesPageStore } from '../../../../store/CategoryStore'

type TEditCustomCategoryProducts = {
  categoryName: string
}
const ShopConfigEditModalBaseInfoCustomCategory: FC<TEditCustomCategoryProducts> =
  ({ categoryName }) => {
    const [products, setProducts] =
      useState<TShopCustomCategoryProducts | null>()
    const [popupValue, setPopupValue] = useState('')
    const [popupShow, setPopupShow] = useState(false)
    const [update, setUpdate] = useState(false)

    useEffect(() => {
      ShopApi.fetchCustomCategoryProducts(categoryName).then(data =>
        setProducts(data)
      )
    }, [update])

    const reorderProducts = async (from: number, to: number) => {
      if (from < 0 || to < 0) return
      if (products) {
        const newProducts = [...products]
        // Delete the item from it's current position
        const item = newProducts.splice(from, 1)
        // Move the item to its new position
        newProducts.splice(to, 0, item[0])

        await updateProductItem(newProducts.map(product => product.id))
      }
    }

    const createProductItem = async (id: string) => {
      await ShopApi.createCustomCategoryProduct(categoryName, {
        data: id,
      }).then(() => {
        categoriesPageStore.updateFetchData()
        setPopupShow(false)
        setUpdate(!update)
      })
    }

    const updateProductItem = async (newProducts: string[]) => {
      await ShopApi.updateCustomCategoryProducts(
        categoryName,
        newProducts
      ).then(() => {
        categoriesPageStore.updateFetchData()
        setUpdate(!update)
      })
    }

    const deleteProductItem = async (id: string) => {
      await ShopApi.deleteCustomCategoryProduct(categoryName, {
        data: id,
      }).then(() => {
        categoriesPageStore.updateFetchData()
        setUpdate(!update)
      })
    }

    return (
      <>
        <div className="w-3/4 my-2">
          <div className="flex items-center justify-center text-xl text-center border-b-2 border-blue-600 py-1 my-2">
            <span>Пользовательская категория: </span>
            <span className="text-gray-700 font-bold">{categoryName}</span>

            <div className="relative">
              <button
                className="ml-3 bg-green-500 border-2 border-green-600 rounded-lg text-white"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </button>
              {popupShow ? (
                <div className="absolute flex flex-col items-center text-white bg-blue-500 px-3 py-2 rounded-lg">
                  <span className="text-xs py-1">Введите ID товара</span>
                  <div className="flex">
                    <input
                      className="px-2 bg-white rounded-l text-gray-700 focus:outline-none w-20"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div>
            {products && products.length !== 0 ? (
              products.map((product, i) => (
                <div key={i} className="flex items-center">
                  <div className="border-2 bg-blue-200 flex justify-between items-center rounded-lg w-full">
                    <img
                      className="h-10 w-10 "
                      src={config.REACT_API_URL + product.img}
                      alt={product.name}
                    />
                    <span className="text-center px-2 flex justify-center w-full">
                      {product.name}
                    </span>
                    <div className="flex text-white items-center justify-center flex-col">
                      <button
                        className="px-1 bg-green-500 hover:bg-green-700"
                        type="button"
                        onClick={() => reorderProducts(i, --i)}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 15l7-7 7 7"
                          ></path>
                        </svg>
                      </button>
                      <button
                        className="px-1 bg-green-500 hover:bg-green-700"
                        type="button"
                        onClick={() => reorderProducts(i, ++i)}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                    </div>

                    <button
                      className="flex items-center bg-red-500 border-2 border-red-600 rounded-r-lg text-white w-10 h-10"
                      title="Удалить"
                      type="button"
                      onClick={() => deleteProductItem(product.id)}
                    >
                      <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-lg">Пусто</div>
            )}
          </div>
        </div>
      </>
    )
  }

export { ShopConfigEditModalBaseInfoCustomCategory }
