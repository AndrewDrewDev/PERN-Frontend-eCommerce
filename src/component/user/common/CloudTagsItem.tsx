import { FC, ReactElement } from 'react'
import { TCategoryInfoByLevel } from '../../../types'
import { Link } from 'react-router-dom'

type TCloudTagsItem = {
  item: TCategoryInfoByLevel
}

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

export { CloudTagsItem }
