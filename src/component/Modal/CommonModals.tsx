import { ProductSliderModal } from './ProductSliderModal/ProductSliderModal'
import { ProductQuickViewModal } from './ProductQuickViewModal'
import { ProductEditModal } from '../Admin/modal/ProductEdit'
import { ShopConfigEditModal } from '../Admin/modal/ShopConfigEdit'

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
