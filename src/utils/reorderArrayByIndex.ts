const reorderArrayByIndex = (array: any[], from: number, to: number) => {
  if (from < 0 || to < 0) return array
  const newProducts = [...array]
  // Delete the item from it's current position
  const item = newProducts.splice(from, 1)
  // Move the item to its new position
  newProducts.splice(to, 0, item[0])

  return newProducts
}

export { reorderArrayByIndex }
