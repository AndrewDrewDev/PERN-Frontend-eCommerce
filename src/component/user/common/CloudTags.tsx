import { FC, ReactElement } from 'react'
import { categoriesPageStore } from '../../../store/CategoryStore'
import { observer } from 'mobx-react-lite'
import { TCategoryInfoByLevel } from '../../../types'
import { Link } from 'react-router-dom'

type TCloudTagsItem = {
  item: TCategoryInfoByLevel
}

const CloudTags: FC = observer((): ReactElement => {
  return (
    <>
      {categoriesPageStore.category1Info ? (
        <div
          className="hidden md:block mt-5 bg-cover bg-opacity-50
        bg-gray-200 bg-center rounded-md shadow-lg"
        >
          <div className="flex flex-col items-center justify-between">
            <h2
              className="mt-3 mb-1 text-xl font-semibold text-gray-700
             hover:underline rounded-full px-3 py-1 hover:text-white
             duration-500 hover:bg-blue-600 text-center"
            >
              Каталог :: Облако-Тегов :: Основные Категории
            </h2>
            <ul
              className="mb-10 mx-auto tag-cloud text-center text-gray-600
            w-11/12"
            >
              {categoriesPageStore.category1Info.map((item, i) => (
                <CloudTagsItem key={i} item={item} />
              ))}
            </ul>
          </div>
        </div>
      ) : null}
      {categoriesPageStore.category2Info ? (
        <div
          className="hidden md:block mt-5 bg-cover bg-opacity-50
        bg-gray-200 bg-center rounded-md shadow-lg"
        >
          <div className="flex flex-col items-center justify-between">
            <h2
              className="mt-3 mb-1 text-xl font-semibold text-gray-700
            hover:underline rounded-full px-3 py-1 hover:text-white
            duration-500 hover:bg-blue-600 text-center"
            >
              Каталог :: Облако-Тегов :: Дополнительные ПодКатегории
            </h2>
            <ul
              className="mb-10 mx-auto tag-cloud text-center text-gray-600
             w-11/12"
            >
              {categoriesPageStore.category2Info.map((item, i) => (
                <CloudTagsItem key={i} item={item} />
              ))}
            </ul>
          </div>
        </div>
      ) : null}
      {categoriesPageStore.category3Info ? (
        <div
          className="hidden md:block mt-5 bg-cover bg-opacity-50
         bg-gray-200 bg-center rounded-md shadow-lg"
        >
          <div className="flex flex-col items-center justify-between">
            <h2
              className="mt-3 mb-1 text-xl font-semibold text-gray-700
             hover:underline rounded-full px-3 py-1 hover:text-white
              duration-500 hover:bg-blue-600 text-center"
            >
              Каталог :: Облако-Тегов :: Ключевые Слова :: Метки
            </h2>
            <ul
              className="mb-10 mx-auto tag-cloud text-center text-gray-600
             w-11/12"
            >
              {categoriesPageStore.category3Info.map((item, i) => (
                <CloudTagsItem key={i} item={item} />
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  )
})

const CloudTagsItem: FC<TCloudTagsItem> = ({ item }): ReactElement => {
  const { name, url, count } = item

  const getRandomValue = (max: number): number => {
    return Math.floor(Math.random() * max) + 1
  }

  return (
    <>
      <Link to={'/category/' + url}>
        <li
          className="inline-flex px-1 duration-500 hover:underline rounded-full
     hover:text-white hover:bg-blue-600"
          style={{
            fontSize: `1.${getRandomValue(3)}rem`,
          }}
        >
          {name}({count})
        </li>
      </Link>
    </>
  )
}

export { CloudTags }
