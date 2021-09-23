import { FC, ReactElement, useEffect, useState } from 'react'
import CategoryApi from '../http/CategoryApi'
import { useParams } from 'react-router-dom'
import { CategoryWrapper } from '../component/user/common/CategoryWrapper'
import { TMainProductsData } from '../types'
import useQuery from '../hooks/useQuery'
import ReactPaginate from 'react-paginate'
import Spinner from '../component/user/common/Spinner'
import { PageNotFound } from './PageNotFound'

const CategoryPage: FC = (): ReactElement => {
  const { id }: { id: string } = useParams()
  const [products, setProducts] = useState<
    TMainProductsData[] | null | undefined
  >()
  const [page, setPage] = useState(1)

  const query = useQuery()
  const categoryName: string = query.get('name') ?? 'Категория не определена'
  const categoryCount: string =
    query.get('count') ?? 'Количество не опеределено'
  const pageCount = Math.ceil(Number(categoryCount) / 20)
  useEffect(() => {
    CategoryApi.fetchProducts({
      name: id,
      limit: 20,
      page,
    }).then(data => setProducts(data))
  }, [page])

  // Get curesnt selected number of pagination
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
        <CategoryWrapper
          name={categoryName}
          count={categoryCount}
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
