import { FC, FormEvent, useEffect, useState } from 'react'
import { TProductPageData } from '../../../types'
import { modalStateStore } from '../../../store/ModalStateStore'
import ProductApi from '../../../http/ProductApi'
import { observer } from 'mobx-react-lite'
import Spinner from '../common/Spinner'
import { ModalInputItem, ModalWrapper } from './ModalComponents'

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
      ProductApi.fetchOneProduct(productId).then(data => setProduct(data))
  }, [productId])

  if (isShowing)
    return (
      <ModalWrapper closeHandler={close}>
        {isShowing && product ? (
          <ProductEditModalBody product={product} />
        ) : null}
        {product === null ? <Spinner /> : null}
      </ModalWrapper>
    )
  return <></>
})

type TProductEditModalBody = { product: TProductPageData }
const ProductEditModalBody: FC<TProductEditModalBody> = ({ product }) => {
  const [name, setName] = useState(product.name)
  const [price, setPrice] = useState(product.price)
  const [oldPrice, setOldPrice] = useState(product.oldPrice)
  const [vendorId, setVendorId] = useState(product.vendorId)
  const [description, setDescription] = useState(product.description)
  const [amount, setAmount] = useState(product.amount)

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // TODO: Add type when finished edit feature
    const data: any = {
      name,
      price,
      oldPrice,
      vendorId,
      description,
      amount,
    }
    await ProductApi.updateProductById(product.id, data).then(
      () =>
        (modalStateStore.productEditModalState = {
          isShowing: false,
          productId: '',
        })
    )
  }

  return (
    <>
      <h3 className="text-center text-2xl">
        <span className="font-bold">Редактирование товара: </span>
        {name}
      </h3>
      <hr className="border-2 rounded-full border-gray-700 my-2" />
      <form
        onSubmit={e => handleOnSubmit(e)}
        className="relative flex flex-col justify-center items-center bg-gray-300 rounded-lg"
      >
        <ModalInputItem
          name="Название"
          value={name}
          setValue={setName}
          autoFocus={true}
        />
        <ModalInputItem name="Цена" value={price} setValue={setPrice} />
        <ModalInputItem
          name="Старая цена"
          value={oldPrice}
          setValue={setOldPrice}
        />
        <ModalInputItem
          name="ID-код поставщика"
          value={vendorId}
          setValue={setVendorId}
        />
        <ModalInputItem name="Количество" value={amount} setValue={setAmount} />
        <ModalInputItem
          inputType={'textarea'}
          name="Описание"
          value={description}
          setValue={setDescription}
        />
        <button type="submit" className=" my-5 p-2 bg-blue-500 text-white">
          Применить изменения
        </button>
      </form>
    </>
  )
}

export { ProductEditModal }
