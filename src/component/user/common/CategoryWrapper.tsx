import { ReactElement } from 'react'
import { FC } from 'react'
import { TMainProductsData } from '../../../types'
import { ProductCard } from './ProductCard'
import { PageNotFound } from '../../../pages/PageNotFound'

type TCategoryWrapper = {
  name: string | undefined
  count: string | undefined
  products: TMainProductsData[] | null
  limit?: number
}

const CategoryWrapper: FC<TCategoryWrapper> = ({
  name,
  count,
  products,
  limit,
}): ReactElement => {
  if (products === null)
    return <PageNotFound title="Страница товаров не найдена" />

  return (
    <>
      <div className="py-2">
        <a
          href="https://siteup.com.ua/demo/msk/tupperware/discount"
          className="hover:underline"
        >
          <h3 className="text-gray-700 text-2xl font-medium">
            {name ? name : 'Название не определено'}
          </h3>
        </a>
        <span className="mt-3 text-sm text-gray-600">
          {count
            ? count + ' + Единиц товара'
            : 'Количество временно неизвестно'}
        </span>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {products.map((product, index) => {
            const count = ++index
            if (limit && count > limit) return
            return <ProductCard key={index} product={product} />
          })}
        </div>
      </div>
    </>
  )
}

export { CategoryWrapper }
