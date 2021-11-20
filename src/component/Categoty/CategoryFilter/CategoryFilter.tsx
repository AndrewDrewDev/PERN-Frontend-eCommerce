import { observer } from 'mobx-react-lite'
import { PriceFilter } from '../PriceFilter/PriceFilter'
import { LabelsFilter } from '../LabelsFilter/LabelsFilter'
import SuppliersFilter from '../SuppliersFilter/SuppliersFilter'
import { categoryState } from '../../../store/CategoryState'

const CategoryFilter = observer(() => {
  const { labels, suppliers } = categoryState.filters
  return (
    <section className="w-64 text-gray-600 px-1 py-2 border-r mr-10">
      <div className="relative">
        <h3 className="text-center text-xl text-gray-700 font-medium">
          Фильтры
        </h3>
        <button
          className="absolute top-0 right-0 text-red-500 hover:text-red-600"
          onClick={() => (categoryState.showFilters = false)}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <Divider />
        <PriceFilter />
        {labels && (
          <>
            <Divider />
            <LabelsFilter />
          </>
        )}
        {suppliers && (
          <>
            <Divider />
            <SuppliersFilter />
          </>
        )}
      </div>
    </section>
  )
})

const Divider = () => <hr className="border-gray-700 my-3" />

export { CategoryFilter }
