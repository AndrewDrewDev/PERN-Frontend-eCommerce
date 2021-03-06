import { ReactElement, useEffect, useState } from 'react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import cn from 'classnames'

import { TProductSearchByNameResult } from '../../../types'
import ProductApi from '../../../http/ProductApi'

const InputSearchBySitePopup: FC = (): ReactElement => {
  const [products, setProducts] = useState<TProductSearchByNameResult[] | null>(
    null
  )
  const [query, setQuery] = useState('')
  const transition = useTransition(query, {
    from: { x: 0, y: 50, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: 50, opacity: 0 },
    reset: true,
  })

  useEffect(() => {
    ProductApi.fetchSearchProductsByName(query).then(data => setProducts(data))
  }, [query])

  const closePopup = () => {
    setQuery('')
  }

  return (
    <div className="relative mt-6 w-11/12 max-w-lg mx-auto text-gray-700">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <svg className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <input
        className="w-full duration-300 border-2 border-gray-400 rounded-md
        pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none
        focus:shadow-outline focus:ring-4"
        type="text"
        placeholder="Поиск по сайту"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {transition(
        (style, item) =>
          item && (
            <animated.div
              className={cn(
                'absolute z-50 w-full mt-1 bg-white border-2 rounded-md ' +
                  'shadow-lg overflow-auto pretty-scroll',
                { 'h-96': products }
              )}
              style={style}
            >
              {products ? (
                products.map((product, i) => (
                  <SearchItem
                    key={i}
                    data={product}
                    customOnClick={closePopup}
                    tabIndex={i}
                  />
                ))
              ) : (
                <EmptyItem />
              )}
            </animated.div>
          )
      )}
    </div>
  )
}

const EmptyItem = () => {
  return (
    <div
      className="my-3 flex items-center justify-center text-lg text-center
     font-medium border-2 border-blue-500 bg-blue-100 border-dashed rounded-lg
     w-full h-10"
    >
      С таким названием товары не найдены
    </div>
  )
}

interface TSearchItem {
  data: TProductSearchByNameResult
  customOnClick: () => void
  tabIndex: number
}
const SearchItem: FC<TSearchItem> = ({
  data,
  customOnClick,
  tabIndex,
}): ReactElement => {
  const { name, img, price, id } = data
  return (
    <Link
      to={'/product/' + id}
      onClick={() => customOnClick()}
      className="block pl-3 font-normal truncate hover:underline
      hover:bg-blue-200 duration-300  hover:font-bold"
      tabIndex={tabIndex}
    >
      <div className="flex items-center px-2">
        <div className="h-14 w-14 flex">
          <img
            className="object-contain items-center"
            src={process.env.REACT_APP_API_URL + img}
            alt={name}
          />
        </div>
        <div className="justify-center w-full mx-2 truncate text-gray-700 font-medium">
          {name}
        </div>
        <div className="text-lg text-red-500">{price}</div>
      </div>
    </Link>
  )
}

export { InputSearchBySitePopup }
