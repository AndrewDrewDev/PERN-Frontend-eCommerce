// @ts-ignore
import SpringList from 'react-spring-dnd'
import ShopApi from '../../../../../http/ShopApi'
import { categoriesPageStore } from '../../../../../store/CategoryStore'
import { shopConfigEditModalState } from '../../../../../store/ShopConfigEditModalState'
import {
  TLabelCategoryNames,
  TShopCustomCategoryProducts,
} from '../../../../../types'
import { FC } from 'react'
import { observer } from 'mobx-react-lite'

const CustomCategoryList: FC<{
  categoryName: TLabelCategoryNames
  products: TShopCustomCategoryProducts
}> = observer(({ categoryName, products }) => {
  const updateProductItems = async (newProductsIndexes: number[]) => {
    if (products) {
      const newProducts = newProductsIndexes.reduce((acc: string[], i) => {
        if (products[i]) acc.push(products[i].id)
        return acc
      }, [])
      await ShopApi.updateCustomCategoryProducts(categoryName, newProducts)
      await categoriesPageStore.updateFetchData()
    }
  }

  const deleteProductItem = async (id: string) => {
    await ShopApi.deleteCustomCategoryProduct(categoryName, {
      data: id,
    })
    await categoriesPageStore.updateFetchData()
    shopConfigEditModalState.updating()
  }

  return (
    <SpringList onDragEnd={(order: number[]) => updateProductItems(order)}>
      {products.map((product, i) => (
        <div key={i} className="cursor-move w-96 flex items-center">
          <div
            className="border-2 bg-blue-200 flex justify-between items-center
            rounded-lg w-full"
          >
            <img
              className="h-10 w-10 "
              src={process.env.REACT_APP_API_URL + product.img}
              alt={product.name}
            />
            <div className="text-center px-2 truncate w-full">
              {product.name}
            </div>

            <button
              className="flex items-center bg-red-500 border-2 border-red-600
              rounded-r-lg text-white w-10 h-10"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </SpringList>
  )
})

export { CustomCategoryList }
