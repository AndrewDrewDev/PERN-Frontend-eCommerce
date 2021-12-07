import React from 'react'
import { PriceFilter } from '../PriceFilter/PriceFilter'
import { categoryState } from '../../../store/CategoryState'
import { LabelsFilter } from '../LabelsFilter/LabelsFilter'
import SuppliersFilter from '../SuppliersFilter/SuppliersFilter'
import Button from '../../Buttons/Buttons'

const CategoryFilterBody = () => {
  const { labels, suppliers } = categoryState.filters

  const resetFilterHandler = async () => {
    await categoryState.resetFilters()
  }

  const applyAndHideFilter = () => {
    categoryState.showFilters = false
  }

  return (
    <div className="text-gray-700">
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
      <div className="flex my-2 justify-center">
        <Button
          content="Сбросить фильтры"
          type="button"
          color="red"
          onClickHandler={() => resetFilterHandler()}
        />
      </div>
      <div className="flex my-2 lg:hidden justify-center">
        <Button
          content="Применить фильтры"
          type="button"
          onClickHandler={() => applyAndHideFilter()}
        />
      </div>
    </div>
  )
}

const Divider = () => <hr className="border-gray-700 my-3" />

export { CategoryFilterBody }
