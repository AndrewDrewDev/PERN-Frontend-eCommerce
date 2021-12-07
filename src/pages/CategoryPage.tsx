import { FC, ReactElement, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import CategoryApi from '../http/CategoryApi'
import { useParams } from 'react-router-dom'
import { CategoryProductList } from '../component/Categoty/CategoryProductList/CategoryProductList'
import { TCSInfoByUrlData, TMainProductsData } from '../types'
import ReactPaginate from 'react-paginate'
import ContentLoadingSpinner from '../component/Loaders/ContentLoadingSpinner/ContentLoadingSpinner'
import { PageNotFound } from './PageNotFound'
import { categoriesPageStore } from '../store/CategoryStore'
import {
  Breadcrumb,
  TBreadcrumbComponentItem,
} from '../component/Product/Breadcrumb'
import { CloudTags } from '../component/CloudTags/CloudTags'
import { modalStateStore } from '../store/ModalStateStore'
import { CategoryFilter } from '../component/Categoty/CategoryFilter/CategoryFilter'
import { categoryState } from '../store/CategoryState'
import { ProductsNotFound } from '../component/Categoty/ProductsNotFound/ProductsNotFound'
import { TransitionWrapper } from '../component/Animations/TransitionWrapper/TransitionWrapper'
import { scrollToBeginPage } from '../utils/scrollToBeginPage'
import { useCategoryType } from '../hooks/useCategoryType/useCategoryType'
import cn from 'classnames'
import { RightSideBarModal } from '../component/Modal/RightSideBarModal/RightSideBarModal'
import { shopConfigStore } from '../store/ShopConfigStore'
import { CategoryFilterBody } from '../component/Categoty/CategoryFilterBody/CategoryFilterBody'

const CategoryPage: FC = observer((): ReactElement => {
  const { id }: { id: string } = useParams()
  const categoryType = useCategoryType()

  const [isLoading, setIsLoading] = useState(true)

  const [categoryInfo, setCategoryInfo] = useState<TCSInfoByUrlData>()
  const [products, setProducts] = useState<TMainProductsData[] | null>(null)
  const [page, setPage] = useState(1)
  const [breadcrumb, setBreadcrumb] = useState<TBreadcrumbComponentItem[]>()

  useEffect(() => {
    ;(async () => {
      try {
        categoryState.categoryType = categoryType
        categoryState.categoryUrl = id

        scrollToBeginPage()
        modalStateStore.closeAll()

        await categoryState.fetchFilter(categoryType, id)

        const products = await CategoryApi.fetchProducts({
          name: id,
          limit: 20,
          page,
          type: categoryType,
          filters: categoryState.getQueryString(),
        })
        setProducts(products)

        const breadcrumb = await CategoryApi.fetchBreadcrumb(id)
        setBreadcrumb(breadcrumb)

        setCategoryInfo(categoriesPageStore.infoById(id))
      } finally {
        setIsLoading(false)
      }
    })()
  }, [page, id, modalStateStore.productEditModalState, categoryState.update])

  // Get current selected number of pagination
  function selectedItem({ selected }: { selected: number }) {
    setPage(selected + 1)
  }

  if (isLoading) return <ContentLoadingSpinner />

  // If category name url is wrong
  if (!categoryInfo) return <PageNotFound title={'Категория не найдена'} />

  const pageCount = Math.ceil(Number(categoryInfo.count) / 20)

  return (
    <>
      <div className="container mx-auto">
        {breadcrumb ? <Breadcrumb categories={breadcrumb} /> : null}
        <div className="flex w-full">
          {categoryState.filterFetched && (
            <>
              {shopConfigStore.isMobile ? (
                <RightSideBarModal
                  show={categoryState.showFilters}
                  setShow={() => (categoryState.showFilters = false)}
                  title={'Фильтры'}
                >
                  <CategoryFilterBody />
                </RightSideBarModal>
              ) : (
                <TransitionWrapper
                  state={categoryState.showFilters}
                  props={{
                    from: { opacity: 1, width: '16rem' },
                    enter: { opacity: 1, width: '16rem' },
                    leave: { opacity: 0, width: '0' },
                  }}
                >
                  <CategoryFilter />
                </TransitionWrapper>
              )}
            </>
          )}
          <div
            className={cn('w-full', {
              'flex-none': !categoryState.showFilters,
            })}
          >
            {products ? (
              <CategoryProductList
                name={categoryInfo.name}
                count={categoryInfo.count}
                products={products}
                filterButton={true}
              />
            ) : (
              <ProductsNotFound />
            )}
          </div>
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

export { CategoryPage }
