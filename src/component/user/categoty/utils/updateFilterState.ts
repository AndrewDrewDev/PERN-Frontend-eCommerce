import { categoryPageState } from '../../../../store/category/CategoryPageState'

const updateFilterState = (checkbox: any, type: 'suppliers' | 'labels') => {
  const value = Number(checkbox.value)

  if (checkbox.checked) {
    const newFilters = categoryPageState.copyFilters()
    newFilters[type]?.map(item => {
      if (item.id === value) {
        item.selected = true
      }
      return item
    })
    categoryPageState.filters = newFilters
  } else {
    const newFilters = categoryPageState.copyFilters()
    newFilters[type]?.map(item => {
      if (item.id === value) {
        item.selected = false
      }
      return item
    })
    categoryPageState.filters = newFilters
  }
  categoryPageState.updating()
}

export { updateFilterState }
