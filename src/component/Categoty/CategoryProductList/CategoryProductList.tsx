import { FC, useEffect } from 'react'
import { TMainProductsData } from '../../../types'
import { ProductCard } from '../../Product/ProductCard'
import { PageNotFound } from '../../../pages/PageNotFound'
import { NameOfCategory } from '../NameOfCategory/NameOfCategory'
import { nanoid } from 'nanoid'
import { categoryState } from '../../../store/CategoryState'

interface TCategoryWrapper {
  name: string
  count: string
  products: TMainProductsData[] | null
  link?: string
  limit?: number
  filterButton?: boolean
}

const CategoryProductList: FC<TCategoryWrapper> = ({
  name,
  count,
  products,
  limit,
  link,
  filterButton = false,
}) => {
  if (products === null) {
    return <PageNotFound title="Страница товаров не найдена" />
  }

  return (
    <>
      <div className="ml-2">
        <NameOfCategory name={name} link={link} filterButton={filterButton} />
        <span className="mt-3 text-sm text-gray-600">
          {count
            ? count + ' + Единиц товара'
            : 'Количество временно неизвестно'}
        </span>
        <div
          className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        xl:grid-cols-4 mt-6"
        >
          {products.map((product, index) => {
            const count = ++index
            if (limit && count > limit) return null
            return <ProductCard key={nanoid()} product={product} />
          })}
        </div>
      </div>
    </>
  )
}

export { CategoryProductList }
