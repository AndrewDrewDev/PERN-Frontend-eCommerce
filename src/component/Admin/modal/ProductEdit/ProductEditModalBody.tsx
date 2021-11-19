import { TProductPageData } from '../../../../types'
import { FC, FormEvent, useEffect, useState } from 'react'
import ProductApi from '../../../../http/ProductApi'
import { modalStateStore } from '../../../../store/ModalStateStore'
import { ManageImagesPreview } from './ManageImagesPreview'
import { Input } from '../../form/Input'
import { Select } from '../../form/Select'
import { TextArea } from '../../form/TextArea'
import Button from '../../../Buttons'
import { ManageImagesBig } from './ManageImagesBig'

type TProductEditModalBody = { product: TProductPageData }
const ProductEditModalBody: FC<TProductEditModalBody> = ({ product }) => {
  // Store product data for submit
  const [name, setName] = useState(product.name)
  const [price, setPrice] = useState(product.price)
  const [oldPrice, setOldPrice] = useState(product.old_price)
  const [vendorId, setVendorId] = useState(product.vendor_id)
  const [description, setDescription] = useState(product.description)
  const [amount, setAmount] = useState(product.amount)
  const [label, setLabel] = useState(product.label)
  const [status, setStatus] = useState(product.status)
  const [supplier, setSupplier] = useState(product.supplier)
  const [unit, setUnit] = useState(product.unit)

  // Load & Store data for options in select html tags
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
        <div className="my-5 w-3/4">
          <ManageImagesPreview image={product.images.preview} />
        </div>
        <div className="my-5 w-3/4">
          <ManageImagesBig productId={product.id} images={product.images.big} />
        </div>
        <Input
          name="Название"
          value={name}
          setValue={setName}
          autoFocus={true}
        />
        <Input name="Цена" value={price} setValue={setPrice} />
        <Input name="Старая цена" value={oldPrice} setValue={setOldPrice} />
        <Input
          name="ID-код поставщика"
          value={vendorId}
          setValue={setVendorId}
        />
        <Input name="Количество" value={amount} setValue={setAmount} />

        <Select
          title="Ярлык :: Бирка"
          options={optionsLabels}
          selected={label}
          selectedHandle={setLabel}
        />

        <Select
          title="Статус"
          options={optionsStatuses}
          selected={status}
          selectedHandle={setStatus}
        />

        <Select
          title="Поставщик"
          options={optionsSuppliers}
          selected={supplier}
          selectedHandle={setSupplier}
        />

        <Select
          title="Единица измерения"
          options={optionsUtils}
          selected={unit}
          selectedHandle={setUnit}
        />

        <TextArea
          name="Описание"
          value={description}
          setValue={setDescription}
        />
        <Button type="submit" content="Применить изменения" />
      </form>
    </>
  )
}
export { ProductEditModalBody }
