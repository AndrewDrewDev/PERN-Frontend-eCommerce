import { ReactElement } from 'react'
import { FC } from 'react'
import { TMainProductsData } from '../../../types'
import { ProductCard } from './ProductCard'
import { PageNotFound } from '../../../pages/PageNotFound'
import { Link } from 'react-router-dom'

type TCategoryWrapper = {
  name: string
  count: string
  products: TMainProductsData[] | null
  limit?: number
  link?: string
}

const CategoryProductList: FC<TCategoryWrapper> = ({
  name,
  count,
  products,
  limit,
  link,
}): ReactElement => {
  if (products === null)
    return <PageNotFound title="Страница товаров не найдена" />

  type TNameOfCategory = {
    name: string
    link?: string
  }
  const NameOfCategory: FC<TNameOfCategory> = ({ name, link }) => {
    const LinkElem: FC = ({ children }) => {
      if (!link) return <></>
      return <Link to={link}>{children}</Link>
    }

    const CategoryName = () => {
      return (
        <h3 className="text-gray-700 text-2xl font-medium">
          {name ? name : 'Название не определено'}
        </h3>
      )
    }

    if (link)
      return (
        <LinkElem>
          <CategoryName />
        </LinkElem>
      )
    return (
      <>
        <CategoryName />
      </>
    )
  }

  return (
    <>
      <div className="py-2">
        <NameOfCategory name={name} link={link} />
        <span className="mt-3 text-sm text-gray-600">
          {count
            ? count + ' + Единиц товара'
            : 'Количество временно неизвестно'}
        </span>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {products.map((product, index) => {
            const count = ++index
            if (limit && count > limit) return <></>
            return <ProductCard key={index} product={product} />
          })}
        </div>
      </div>
    </>
  )
}

export { CategoryProductList }
