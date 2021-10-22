import { ProductSliderModal } from './ProductSliderModal/ProductSliderModal'
import { ProductQuickViewModal } from './ProductQuickViewModal'
import { ProductEditModal } from './ProductEditModal'
import { ShopConfigEditModal } from './ShopConfigEditModal/'

const CommonModals = () => {
  return (
    <>
      <ProductSliderModal />
      <ProductQuickViewModal />
      <ProductEditModal />
      <ShopConfigEditModal />
    </>
  )
}

export { CommonModals }
