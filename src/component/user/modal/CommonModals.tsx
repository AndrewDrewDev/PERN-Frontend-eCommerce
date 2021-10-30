import { ProductSliderModal } from './ProductSliderModal/ProductSliderModal'
import { ProductQuickViewModal } from './ProductQuickViewModal'
import { ProductEditModal } from '../../admin/modal/ProductEditModal/ProductEditModal'
import { ShopConfigEditModal } from '../../admin/modal/ShopConfigEditModal/'

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
