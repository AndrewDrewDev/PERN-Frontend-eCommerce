import { FC, ReactElement } from 'react'
import { categoriesPageStore } from '../store/CategoryStore'
import { TCategoryInfoByLevel } from '../types'
import { Link } from 'react-router-dom'
import { REACT_API_URL } from '../config'
import { Breadcrumb } from '../component/Product/Breadcrumb'
import { CloudTags } from '../component/CloudTags/CloudTags'
import { observer } from 'mobx-react-lite'

const CatalogPage: FC = observer((): ReactElement => {
  return (
    <>
      {categoriesPageStore.category1Info ? (
        <>
          <Breadcrumb />
          <h1 className="text-gray-700 text-2xl text-center font-medium">
            Основные Категории Каталога Товаров
          </h1>

          <div className="border-2 rounded-full border-gray-600 my-2" />

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4">
            {categoriesPageStore.category1Info.map((category, i) => (
              <CategoryCard key={i} {...category} />
            ))}
          </div>
        </>
      ) : null}
      <CloudTags />
    </>
  )
})

const CategoryCard: FC<TCategoryInfoByLevel> = (props): ReactElement => {
  const { name, count, img, url } = props
  return (
    <>
      <div className="flex relative flex-col max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto w-full">
        <Link
          to={'/category/' + url}
          className="px-4 py-2 bg-blue-500 flex-auto relative z-10"
        >
          <h2 className="font-bold text-white text-xl text-center hover:underline">
            {name}
          </h2>
          <div className="font-bold text-white text-sm text-center hover:underline">
            {count}+ Единиц Товара
          </div>
        </Link>
        <div
          className="relative flex items-center justify-center"
          style={{ minHeight: 300 + 'px' }}
        >
          <Link to={'/category/' + url}>
            <img
              className="transform scale-100 hover:scale-110 duration-500 ease-in-out m-auto w-full"
              src={REACT_API_URL + img}
              style={{
                maxHeight: 300 + 'px',
                maxWidth: 100 + '%',
              }}
              alt={name}
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export { CatalogPage }
