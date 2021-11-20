import { FC } from 'react'
import { FilterButton } from '../FilterButton/FilterButton'
import { Link } from 'react-router-dom'

interface TNameOfCategory {
  name: string
  link?: string
  filterButton?: boolean
}
const NameOfCategory: FC<TNameOfCategory> = ({ name, link, filterButton }) => {
  const CategoryName = () => {
    return (
      <div className="flex items-center">
        <h1 className="text-gray-700 text-2xl font-medium truncate">
          {name ? name : 'Название не определено'}
        </h1>
        {filterButton && <FilterButton />}
      </div>
    )
  }

  if (link) return <Link to={link}>{CategoryName}</Link>
  return <CategoryName />
}

export { NameOfCategory }
