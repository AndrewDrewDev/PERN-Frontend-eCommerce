import { FC, ReactElement, useEffect, useState } from 'react'
import CategoryApi from '../http/CategoryApi'
import { useLocation, useParams } from 'react-router-dom'
import { CategoryProductList } from '../component/user/common/CategoryProductList'
import { TCSInfoByUrlData, TMainProductsData } from '../types'
import ReactPaginate from 'react-paginate'
import Spinner from '../component/common/Spinner'
import { PageNotFound } from './PageNotFound'
import { categoriesPageStore } from '../store/CategoryStore'
import {
  Breadcrumb,
  TBreadcrumbComponentItem,
} from '../component/user/product/Breadcrumb'
import { CloudTags } from '../component/user/common/CloudTags'
import { modalStateStore } from '../store/ModalStateStore'
import { observer } from 'mobx-react-lite'

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

        const products = await CategoryApi.fetchProducts({
          name: id,
          limit: 20,
          page,
          type: defineTypeOfPageByUrl(location.pathname),
        })

        const breadcrumb = await CategoryApi.fetchBreadcrumb(id)
        setBreadcrumb(breadcrumb)

        setProducts(products)

        setCategoryInfo(categoriesPageStore.infoById(id))
      } finally {
        setIsLoading(false)
      }
    })()
  }, [page, id, modalStateStore.productEditModalState])

  // Get current selected number of pagination
  const selectedItem = (data: any) => {
    const { selected } = data
    setPage(selected + 1)
  }

  if (isLoading) return <Spinner />
  if (products === null || !categoryInfo)
    return <PageNotFound title={'Категория не найдена'} />

  const pageCount = Math.ceil(Number(categoryInfo.count) / 20)
  return (
    <>
      <div className="container mx-auto">
        {breadcrumb ? <Breadcrumb categories={breadcrumb} /> : null}
        <CategoryProductList
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
      <CloudTags />
    </>
  )
})

const defineTypeOfPageByUrl = (
  location: string
): 'custom' | 'common' | 'label' | 'all' => {
  const splitLocation = location.split('/')

  if (splitLocation.includes('custom')) return 'label'
  if (splitLocation.includes('all')) return 'all'
  return 'common'
}

export { CategoryPage }
