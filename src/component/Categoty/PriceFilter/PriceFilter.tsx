import React from 'react'
import { observer } from 'mobx-react-lite'
import { categoryState } from '../../../store/CategoryState'
import { HeaderFilter } from '../HeaderFilter'

const PriceFilter = observer(() => {
  const filters = categoryState.filters

  function onMinPriceHandle(value: string) {
    const newFilters: any = categoryState.copyFilters()
    newFilters.price.min = value
    categoryState.filters = newFilters
  }

  function onMaxPriceHandle(value: string) {
    const newFilters: any = categoryState.copyFilters()
    newFilters.price.max = value
    categoryState.filters = newFilters
  }

  function onSubmitHandle(e: any) {
    e.preventDefault()
    categoryState.updating()
  }

  return (
    <form onSubmit={e => onSubmitHandle(e)}>
      <HeaderFilter name="Цена:" />
      <div className="flex items-center">
        <input
          className="px-2 py-1 border border-gray-500  rounded-lg w-20
            text-gray-700 focus:border-blue-500 focus:outline-none "
          type="number"
          inputMode="decimal"
          title="Минимальная цена"
          value={filters.price?.min}
          onChange={e => onMinPriceHandle(e.target.value)}
          maxLength={6}
        />
        <span className="mx-1">—</span>
        <input
          className="px-2 py-1 border border-gray-500  rounded-lg w-20
            text-gray-700 focus:border-blue-500 focus:outline-none "
          type="number"
          inputMode="decimal"
          title="Максимальная цена"
          onChange={e => onMaxPriceHandle(e.target.value)}
          value={filters.price?.max}
          maxLength={6}
        />
        <button
          className="px-2 py-1 border border-gray-500 mx-2 font-medium
            rounded-lg hover:bg-blue-500 hover:text-white hover:border-blue-600
            duration-200"
          title="Поиск по цене"
        >
          ОК
        </button>
      </div>
    </form>
  )
})

export { PriceFilter }
