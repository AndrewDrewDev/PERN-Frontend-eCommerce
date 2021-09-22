import { FC, ReactElement } from 'react'
import { TCategoryInfoByLevel } from '../../../types'
import { Link } from 'react-router-dom'

type TCloudTagsItem = {
  item: TCategoryInfoByLevel
}

const CloudTagsItem: FC<TCloudTagsItem> = ({ item }): ReactElement => {
  const getRandomValue = (max: number): number => {
    return Math.floor(Math.random() * max) + 1
  }

  return (
    <>
      <Link to={`/category/?name=${item.url}&limit=5&page=1`}>
        <li
          className="inline-flex px-1 duration-500 hover:underline rounded-full
     hover:text-white hover:bg-blue-600"
          style={{
            fontSize: `1.${getRandomValue(3)}rem`,
          }}
        >
          {item.name}({item.count})
        </li>
      </Link>
    </>
  )
}

export { CloudTagsItem }
