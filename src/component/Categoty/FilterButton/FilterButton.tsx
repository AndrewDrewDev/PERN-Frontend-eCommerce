import { observer } from 'mobx-react-lite'
import { categoryState } from '../../../store/CategoryState'

const FilterButton = observer(() => {
  const { showFilters } = categoryState

  return (
    <button
      className="mx-3 px-2 flex items-center bg-blue-500 text-white border
     rounded duration-500 hover:bg-blue-600 border-blue-600 truncate"
      onClick={() => (categoryState.showFilters = !showFilters)}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
        />
      </svg>
      <span className="text-sm ml-1">
        {categoryState.showFilters ? 'Скрыть фильтры' : 'Показать фильтры'}
      </span>
    </button>
  )
})

export { FilterButton }
