import { FC, ReactElement, useEffect, useState } from 'react'
import CategoryApi from '../http/CategoryApi'
import { useParams } from 'react-router-dom'
import { CategoryWrapper } from '../component/user/common/CategoryWrapper'
import { TCSInfoByUrlData, TMainProductsData } from '../types'
import ReactPaginate from 'react-paginate'
import Spinner from '../component/user/common/Spinner'
import { PageNotFound } from './PageNotFound'
import { categoriesPageStore } from '../store/CategoryStore'
import {
  Breadcrumb,
  TBreadcrumbComponentItem,
} from '../component/user/product/Breadcrumb'

const CategoryPage: FC = (): ReactElement => {
  const { id }: { id: string } = useParams()
  const [categoryInfo, setCategoryInfo] = useState<TCSInfoByUrlData>({
    name: 'Category not found!',
    url: 'Url not found!',
    count: '0',
  })
  const [products, setProducts] = useState<
    TMainProductsData[] | null | undefined
  >()

  const [page, setPage] = useState(1)

  const [breadcrumb, setBreadcrumb] = useState<TBreadcrumbComponentItem[]>()

  const pageCount = Math.ceil(Number(categoryInfo.count) / 20)

  useEffect(() => {
    CategoryApi.fetchProducts({
      name: id,
      limit: 20,
      page,
    })
      .then(data => setProducts(data))
      .then(() => setCategoryInfo(categoriesPageStore.infoByUrl(id)))

    CategoryApi.fetchBreadcrumb(id).then(data => setBreadcrumb(data))
  }, [page, id])

  // Get current selected number of pagination
  const selectedItem = (data: any) => {
    const { selected } = data
    setPage(selected + 1)
  }

  if (products === null)
    return (
      <>
        <PageNotFound title={'Категория не найдена'} />
      </>
    )

  if (products === undefined)
    return (
      <>
        <Spinner />
      </>
    )

  return (
    <>
      <div className="container mx-auto">
        {breadcrumb ? <Breadcrumb categories={breadcrumb} /> : null}
        <CategoryWrapper
          name={categoryInfo.name}
          count={categoryInfo.count}
          products={products}
        />
        <div className="my-5">
          <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            containerClassName={'flex justify-center'}
            activeClassName={'bg-green-300'}
            pageClassName={
              'py-1 px-3 text-xl flex items-center rounded leading-tight bg-white border ' +
              'border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 ' +
              'hover:text-white'
            }
            previousClassName={
              'py-1 px-3 text-xl flex items-center leading-tight bg-white border ' +
              'border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l ' +
              'hover:bg-blue-500 hover:text-white'
            }
            nextClassName={
              'py-1 px-3 text-xl flex items-center leading-tight bg-white border ' +
              'border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l ' +
              'hover:bg-blue-500 hover:text-white'
            }
            breakClassName={
              'py-1 px-3 text-xl flex items-center leading-tight bg-white border ' +
              'border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 ' +
              'hover:text-white'
            }
            previousLabel={'❮'}
            nextLabel={'❯'}
            onPageChange={selectedItem}
          />
        </div>
      </div>
    </>
  )
}

export { CategoryPage }
