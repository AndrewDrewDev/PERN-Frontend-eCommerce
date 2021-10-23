import { FC, FormEvent, useState } from 'react'
import ShopApi from '../../../../http/ShopApi'
import { modalStateStore } from '../../../../store/ModalStateStore'
import { shopConfigStore } from '../../../../store/ShopConfigStore'
import { TShopConfig } from '../../../../types'
import { ModalInputItem } from '../ModalComponents'
import { EditCustomCategoryProducts } from './EditCustomCategoryProducts'

type TProductEditModalBody = { shopConfig: TShopConfig }
const ShopConfigEditModalBody: FC<TProductEditModalBody> = ({ shopConfig }) => {
  // Define base shop config field
  const [title, setTitle] = useState(shopConfig.title)
  const [sub_title, setSub_title] = useState(shopConfig.sub_title)
  const [address, setAddress] = useState(shopConfig.address)
  const [phone, setPhone] = useState(shopConfig.phone)
  const [email, setEmail] = useState(shopConfig.email)
  const [pagination_number, setPagination_number] = useState(
    shopConfig.pagination_number
  )
  const [currency, setCurrency] = useState(shopConfig.currency)

  const [copyright, setCopyright] = useState(shopConfig.copyright)

  const [category_cloud_number, setCategory_cloud_number] = useState(
    shopConfig.category_cloud_number
  )

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const updateConfigSubmitData: TShopConfig | any = {
      title,
      sub_title,
      address,
      phone,
      email,
      pagination_number,
      currency,
      copyright,
      category_cloud_number,
    }

    await ShopApi.updateConfig(updateConfigSubmitData).then(
      () => (modalStateStore.shopConfigEditModalState.isShowing = false)
    )

    shopConfigStore.updateFetchData()
  }

  return (
    <>
      <h3 className="text-center text-3xl">
        <span className="font-bold">Управление магазином</span>
      </h3>
      <hr className="border-2 rounded-full border-gray-700 my-2" />
      <form
        onSubmit={e => handleOnSubmit(e)}
        className="relative flex flex-col justify-center items-center bg-gray-300 rounded-lg"
      >
        <EditCustomCategoryProducts categoryName="Акции" />
        <EditCustomCategoryProducts categoryName="Новинки" />
        <ModalInputItem
          name="Название магазина"
          value={title}
          setValue={setTitle}
          autoFocus={true}
        />
        <ModalInputItem
          name="Манифест магазина"
          value={sub_title}
          setValue={setSub_title}
        />
        <ModalInputItem
          name="Адрес магазина"
          value={address}
          setValue={setAddress}
        />
        <ModalInputItem
          name="Телефон магазина"
          value={phone}
          setValue={setPhone}
        />
        <ModalInputItem
          name="Email магазина"
          value={email}
          setValue={setEmail}
        />
        <ModalInputItem
          name="Количество товара на странице категории"
          value={pagination_number}
          setValue={setPagination_number}
        />
        <ModalInputItem name="Валюта" value={currency} setValue={setCurrency} />
        <ModalInputItem
          name="Copyright | Авторские права"
          value={copyright}
          setValue={setCopyright}
        />
        <ModalInputItem
          name="category_cloud_number"
          value={category_cloud_number}
          setValue={setCategory_cloud_number}
        />
        <button type="submit" className=" my-5 p-2 bg-blue-500 text-white">
          Применить изменения
        </button>
      </form>
    </>
  )
}

export { ShopConfigEditModalBody }
