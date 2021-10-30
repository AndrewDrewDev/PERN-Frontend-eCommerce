import { useEffect, useState } from 'react'
import { TProductPageData } from '../../../../types'
import { modalStateStore } from '../../../../store/ModalStateStore'
import ProductApi from '../../../../http/ProductApi'
import { observer } from 'mobx-react-lite'
import Spinner from '../../../user/common/Spinner'
import { WideModalWrapper } from '../../../user/modal/WideModalWrapper'
import { productEditModalState } from './ProductEditModalState'
import { ProductEditModalBody } from './ProductEditModalBody'

const ProductEditModal = observer(() => {
  const [product, setProduct] = useState<TProductPageData | null | undefined>()

  const isShowing = modalStateStore.productEditModalState.isShowing
  const productId = modalStateStore.productEditModalState.productId

  const close = () => {
    modalStateStore.productEditModalState = {
      isShowing: false,
      productId: '',
    }
    setProduct(undefined)
  }

  useEffect(() => {
    setProduct(null)
    if (productId)
      ProductApi.fetchOneProduct(productId).then(data => {
        setProduct(data)
      })
  }, [productId, productEditModalState.update])

  if (isShowing)
    return (
      <WideModalWrapper active={isShowing} setActive={close}>
        {isShowing && product ? (
          <ProductEditModalBody product={product} />
        ) : null}
        {product === null ? <Spinner /> : null}
      </WideModalWrapper>
    )
  return <></>
})

export { ProductEditModal }
