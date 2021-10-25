import { FC, FormEvent, useEffect, useState } from 'react'
import { TProductPageData } from '../../../types'
import { modalStateStore } from '../../../store/ModalStateStore'
import ProductApi from '../../../http/ProductApi'
import { observer } from 'mobx-react-lite'
import Spinner from '../common/Spinner'
import { WideModalWrapper } from './WideModalWrapper'
import { AdminFormInput } from '../../admin/modal/AdminFormInput'
import { AdminFormSelect } from '../../admin/modal/AdminFormSelect'

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
      <WideModalWrapper active={isShowing} setActive={close}>
        {isShowing && product ? (
          <ProductEditModalBody product={product} />
        ) : null}
        {product === null ? <Spinner /> : null}
      </WideModalWrapper>
    )
  return <></>
})

type TProductEditModalBody = { product: TProductPageData }
const ProductEditModalBody: FC<TProductEditModalBody> = ({ product }) => {
  // Store product data for submit
  const [name, setName] = useState(product.name)
  const [price, setPrice] = useState(product.price)
  const [oldPrice, setOldPrice] = useState(product.oldPrice)
  const [vendorId, setVendorId] = useState(product.vendorId)
  const [description, setDescription] = useState(product.description)
  const [amount, setAmount] = useState(product.amount)
  const [label, setLabel] = useState(product.label)
  const [status, setStatus] = useState(product.status)
  const [supplier, setSupplier] = useState(product.supplier)
  const [unit, setUnit] = useState(product.unit)

  // Load & Store data for opnions in select html tags
  type TOptionsX = string[]
  const [optionsLabels, setOptionsLabels] = useState<TOptionsX>()
  const [optionsStatuses, setOptionsStatuses] = useState<TOptionsX>()
  const [optionsSuppliers, setOptionsSuppliers] = useState<TOptionsX>()
  const [optionsUtils, setOptionsUtils] = useState<TOptionsX>()
  useEffect(() => {
    ProductApi.fetchLabels().then(data => setOptionsLabels(data))
    ProductApi.fetchStatuses().then(data => setOptionsStatuses(data))
    ProductApi.fetchSuppliers().then(data => setOptionsSuppliers(data))
    ProductApi.fetchUtils().then(data => setOptionsUtils(data))
  }, [])

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // TODO: Remove any after finished work feature
    const data: TProductPageData | any = {
      name,
      price,
      oldPrice,
      vendorId,
      description,
      amount,
      label,
      status,
      supplier,
      unit,
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
        <AdminFormInput
          name="Название"
          value={name}
          setValue={setName}
          autoFocus={true}
        />
        <AdminFormInput name="Цена" value={price} setValue={setPrice} />
        <AdminFormInput
          name="Старая цена"
          value={oldPrice}
          setValue={setOldPrice}
        />
        <AdminFormInput
          name="ID-код поставщика"
          value={vendorId}
          setValue={setVendorId}
        />
        <AdminFormInput name="Количество" value={amount} setValue={setAmount} />

        <AdminFormSelect
          title="Ярлык :: Бирка"
          options={optionsLabels}
          selected={label}
          selectedHandle={setLabel}
        />

        <AdminFormSelect
          title="Статус"
          options={optionsStatuses}
          selected={status}
          selectedHandle={setStatus}
        />

        <AdminFormSelect
          title="Поставщик"
          options={optionsSuppliers}
          selected={supplier}
          selectedHandle={setSupplier}
        />

        <AdminFormSelect
          title="Единица измерения"
          options={optionsUtils}
          selected={unit}
          selectedHandle={setUnit}
        />

        <AdminFormInput
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
