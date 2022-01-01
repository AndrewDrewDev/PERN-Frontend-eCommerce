import { FC } from 'react'
import { FilterButton } from '../FilterButton'
import { Link } from 'react-router-dom'

interface NameOfCategoryProps {
  name: string
  link?: string
  filterButton?: boolean
}
const NameOfCategory: FC<NameOfCategoryProps> = ({ name, link, filterButton }) => {
  const CategoryName = () => {
    return (
      <div className="flex items-center">
        <h1 className="text-gray-700 text-2xl font-medium">
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
