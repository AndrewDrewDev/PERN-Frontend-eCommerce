import { ProductSliderModal } from './ProductSliderModal/ProductSliderModal'
import { ProductQuickViewModal } from './ProductQuickViewModal'
import { ProductEditModal } from './ProductEditModal'

const CommonModals = () => {
  return (
    <>
      <ProductSliderModal />
      <ProductQuickViewModal />
      <ProductEditModal />
    </>
  )
}

export { CommonModals }
