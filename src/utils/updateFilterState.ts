import { categoryState } from '../store/CategoryState'

const updateFilterState = (checkbox: any, type: 'suppliers' | 'labels') => {
  const value = Number(checkbox.value)

  if (checkbox.checked) {
    const newFilters = categoryState.copyFilters()
    newFilters[type]?.map(item => {
      if (item.id === value) {
        item.selected = true
      }
      return item
    })
    categoryState.filters = newFilters
  } else {
    const newFilters = categoryState.copyFilters()
    newFilters[type]?.map(item => {
      if (item.id === value) {
        item.selected = false
      }
      return item
    })
    categoryState.filters = newFilters
  }
  categoryState.updating()
}

export { updateFilterState }
