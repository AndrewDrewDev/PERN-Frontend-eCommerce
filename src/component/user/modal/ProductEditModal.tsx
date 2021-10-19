import { FC, FormEvent, useEffect, useState } from 'react'
import { TProductPageData } from '../../../types'
import { modalStateStore } from '../../../store/ModalStateStore'
import ProductApi from '../../../http/ProductApi'
import { observer } from 'mobx-react-lite'
import Spinner from '../common/Spinner'

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
      <div
        className="fixed inset-0 w-full h-screen flex justify-center
          items-center z-50 bg-black bg-opacity-50 duration-300
          overflow-y-hidden"
        onClick={() => close()}
      >
        <div
          className="relative text-gray-700 bg-white my-5 py-5 px-5 rounded w-11/12
            md:w-4/5 overflow-auto bg-gray-200"
          onClick={e => e.stopPropagation()}
          style={{
            maxHeight: '95%',
          }}
        >
          {isShowing && product ? (
            <ProductEditModalBody product={product} />
          ) : null}
          {product === null ? <Spinner /> : null}
        </div>
      </div>
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
        <InputItem
          name="Название"
          value={name}
          setValue={setName}
          autoFocus={true}
        />
        <InputItem name="Цена" value={price} setValue={setPrice} />
        <InputItem name="Старая цена" value={oldPrice} setValue={setOldPrice} />
        <InputItem
          name="ID-код поставщика"
          value={vendorId}
          setValue={setVendorId}
        />
        <InputItem name="Количество" value={amount} setValue={setAmount} />
        <InputItem
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

type TInputItem = {
  inputType?: 'input' | 'textarea'
  name: string
  value: string
  setValue: (newValue: string) => void
  autoFocus?: boolean
}
const InputItem: FC<TInputItem> = ({
  inputType,
  name,
  value,
  setValue,
  autoFocus,
}) => {
  if (!inputType) inputType = 'input'
  return (
    <>
      <div className="px-4 py-2 w-3/4 ">
        <label htmlFor={name} className="text-lg font-bold text-gray-700">
          {name}
        </label>
        {inputType === 'input' ? (
          <input
            id={name}
            className="mt-2 w-full px-2 duration-300 py-1 border-2
            focus:border-blue-500 focus:outline-none focus:shadow-outline
            rounded-md focus:ring-4 flex-grow outline-none text-gray-700
            focus:text-blue-700"
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Введите текст"
            autoFocus={autoFocus}
          />
        ) : (
          <textarea
            value={value}
            onChange={e => setValue(e.target.value)}
            className="h-96 mt-2 w-full px-2 duration-300 py-1 border-2
            focus:border-blue-500 focus:outline-none focus:shadow-outline
            rounded-md focus:ring-4 flex-grow outline-none text-gray-700
            focus:text-blue-700"
          />
        )}
      </div>
    </>
  )
}

export { ProductEditModal }
