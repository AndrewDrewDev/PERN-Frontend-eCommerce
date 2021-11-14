import { FC, ReactElement, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import CategoryApi from '../http/CategoryApi'
import { useLocation, useParams } from 'react-router-dom'
import { CategoryProductList } from '../component/user/categoty/CategoryProductList'
import { TCSInfoByUrlData, TMainProductsData } from '../types'
import ReactPaginate from 'react-paginate'
import Spinner from '../component/user/loaders/Spinner'
import { PageNotFound } from './PageNotFound'
import { categoriesPageStore } from '../store/CategoryStore'
import {
  Breadcrumb,
  TBreadcrumbComponentItem,
} from '../component/user/product/Breadcrumb'
import { CloudTags } from '../component/user/CloudTags/CloudTags'
import { modalStateStore } from '../store/ModalStateStore'
import { CategoryFilter } from '../component/user/categoty/CategoryFilter'
import { categoryPageState } from '../store/CategoryPageState'
import { ProductsNotFound } from '../component/user/categoty/ProductsNotFound'

const CategoryPage: FC = observer((): ReactElement => {
  const { id }: { id: string } = useParams()
  const location = useLocation()

  const [isLoading, setIsLoading] = useState(true)

  const [categoryInfo, setCategoryInfo] = useState<TCSInfoByUrlData>()
  const [products, setProducts] = useState<TMainProductsData[] | null>(null)
  const [page, setPage] = useState(1)
  const [breadcrumb, setBreadcrumb] = useState<TBreadcrumbComponentItem[]>()

  useEffect(() => {
    ;(async () => {
      try {
        window.scrollTo(0, 0)
        modalStateStore.closeAll()

        await categoryPageState.fetchFilter(id)

        const products = await CategoryApi.fetchProducts({
          name: id,
          limit: 20,
          page,
          type: defineTypeOfPageByUrl(location.pathname),
          filters: categoryPageState.getQueryString(),
        })
        setProducts(products)

        const breadcrumb = await CategoryApi.fetchBreadcrumb(id)
        setBreadcrumb(breadcrumb)

        setCategoryInfo(categoriesPageStore.infoById(id))
      } finally {
        setIsLoading(false)
      }
    })()
  }, [
    page,
    id,
    modalStateStore.productEditModalState,
    categoryPageState.update,
  ])

  // Get current selected number of pagination
  function selectedItem({ selected }: { selected: number }) {
    setPage(selected + 1)
  }

  if (isLoading) return <Spinner />

  // If category name url is wrong
  if (!categoryInfo) return <PageNotFound title={'Категория не найдена'} />

  const pageCount = Math.ceil(Number(categoryInfo.count) / 20)

  return (
    <>
      <div className="container mx-auto">
        {breadcrumb ? <Breadcrumb categories={breadcrumb} /> : null}
        <div className="flex w-full">
          {categoryPageState.filterFetched && <CategoryFilter />}
          {products ? (
            <CategoryProductList
              name={categoryInfo.name}
              count={categoryInfo.count}
              products={products}
            />
          ) : (
            <ProductsNotFound id={id} />
          )}
        </div>
        {products && (
          <div className="my-5">
            <ReactPaginate
              pageCount={pageCount}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              containerClassName={'flex justify-center'}
              activeClassName={'bg-green-300'}
              pageClassName="py-1 px-3 text-xl flex items-center rounded
            leading-tight bg-white border border-gray-200 text-blue-700
            border-r-0 hover:bg-blue-500 hover:text-white"
              previousClassName="py-1 px-3 text-xl flex items-center leading-tight
            bg-white border border-gray-200 text-blue-700 border-r-0 ml-0
            rounded-l hover:bg-blue-500 hover:text-white"
              nextClassName="py-1 px-3 text-xl flex items-center leading-tight
            bg-white border border-gray-200 text-blue-700 border-r-0 ml-0
            rounded-l hover:bg-blue-500 hover:text-white"
              breakClassName="py-1 px-3 text-xl flex items-center leading-tight
            bg-white border border-gray-200 text-blue-700 border-r-0
            hover:bg-blue-500 hover:text-white"
              previousLabel="❮"
              nextLabel="❯"
              onPageChange={selectedItem}
            />
          </div>
        )}
      </div>
      <CloudTags />
    </>
  )
})

const defineTypeOfPageByUrl = (
  location: string
): 'custom' | 'common' | 'label' | 'all' => {
  const splitLocation = location.split('/')

  if (splitLocation.includes('label')) return 'label'
  if (splitLocation.includes('all')) return 'all'
  return 'common'
}

export { CategoryPage }
