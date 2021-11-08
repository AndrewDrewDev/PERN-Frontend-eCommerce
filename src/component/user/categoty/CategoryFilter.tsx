import { observer } from 'mobx-react-lite'
import { PriceFilter } from './PriceFilter'
import { LabelsFilter } from './LabelsFilter'
import SuppliersFilter from './SuppliersFilter'
import { categoryPageState } from './CategoryPageState'

const CategoryFilter = observer(() => {
  const { labels, suppliers } = categoryPageState.filters
  return (
    <section className="w-64 text-gray-600 px-1 py-2">
      <h3 className="text-center text-xl text-gray-700 font-medium">Фильтры</h3>
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
    </section>
  )
})

const Divider = () => <hr className="border-gray-700 my-3" />

export { CategoryFilter }
