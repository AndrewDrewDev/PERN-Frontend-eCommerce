import { observer } from 'mobx-react-lite'
import { FC, FormEvent, useEffect, useState } from 'react'
import { TProductPageData, TShopConfig } from '../../../types'
import { modalStateStore } from '../../../store/ModalStateStore'
import { ModalInputItem, ModalWrapper } from './ModalComponents'
import Spinner from '../common/Spinner'
import ShopApi from '../../../http/ShopApi'
import ProductApi from '../../../http/ProductApi'
import { shopConfigStore } from '../../../store/ShopConfigStore'

const ShopConfigEditModal = observer(() => {
  const [shopConfig, setShopConfig] = useState<TShopConfig | null | undefined>()

  const isShowing = modalStateStore.shopConfigEditModalState.isShowing

  const close = () => {
    modalStateStore.shopConfigEditModalState.isShowing = false
    setShopConfig(undefined)
  }

  useEffect(() => {
    setShopConfig(null)
    ShopApi.fetchConfig().then(data => setShopConfig(data))
  }, [isShowing])

  if (isShowing)
    return (
      <ModalWrapper closeHandler={close}>
        {isShowing && shopConfig ? (
          <ProductEditModalBody shopConfig={shopConfig} />
        ) : null}
        {shopConfig === null ? <Spinner /> : null}
      </ModalWrapper>
    )
  return <></>
})

type TProductEditModalBody = { shopConfig: TShopConfig }
const ProductEditModalBody: FC<TProductEditModalBody> = ({ shopConfig }) => {
  const [title, setTitle] = useState(shopConfig.title)
  const [sub_title, setSub_title] = useState(shopConfig.sub_title)
  const [id, setId] = useState(shopConfig.id)
  const [base_link, setBase_link] = useState(shopConfig.base_link)
  const [address, setAddress] = useState(shopConfig.address)
  const [phone, setPhone] = useState(shopConfig.phone)
  const [email, setEmail] = useState(shopConfig.email)
  const [pagination_number, setPagination_number] = useState(
    shopConfig.pagination_number
  )
  const [currency, setCurrency] = useState(shopConfig.currency)
  const [catalog_page, setCatalog_page] = useState(shopConfig.catalog_page)
  const [category_number, setCategory_number] = useState(
    shopConfig.category_number
  )
  const [copyright, setCopyright] = useState(shopConfig.copyright)
  const [social_network, setSocial_network] = useState(
    shopConfig.social_network
  )
  const [category_cloud_number, setCategory_cloud_number] = useState(
    shopConfig.category_cloud_number
  )
  const [card_view, setCard_view] = useState(shopConfig.card_view)
  const [site_grid_view, setSite_grid_view] = useState(
    shopConfig.site_grid_view
  )
  const [site_detail_view, setSite_detail_view] = useState(
    shopConfig.site_detail_view
  )

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // TODO: Add type when finished edit feature
    const data: TShopConfig = {
      title,
      sub_title,
      id,
      base_link,
      address,
      phone,
      email,
      pagination_number,
      currency,
      catalog_page,
      category_number,
      copyright,
      social_network,
      category_cloud_number,
      card_view,
      site_grid_view,
      site_detail_view,
    }
    await ShopApi.updateConfig(data).then(
      () => (modalStateStore.shopConfigEditModalState.isShowing = false)
    )
    shopConfigStore.updateFetchData()
  }

  return (
    <>
      <h3 className="text-center text-2xl">
        <span className="font-bold">Конфигурация магазина</span>
      </h3>
      <hr className="border-2 rounded-full border-gray-700 my-2" />
      <form
        onSubmit={e => handleOnSubmit(e)}
        className="relative flex flex-col justify-center items-center bg-gray-300 rounded-lg"
      >
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
        <ModalInputItem name="ID магазина" value={id} setValue={setId} />
        <ModalInputItem
          name="Ссылка магазина"
          value={base_link}
          setValue={setBase_link}
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
          name="catalog_page"
          value={catalog_page}
          setValue={setCatalog_page}
        />
        <ModalInputItem
          name="category_number"
          value={category_number}
          setValue={setCategory_number}
        />
        <ModalInputItem
          name="Copyright | Авторские права"
          value={copyright}
          setValue={setCopyright}
        />
        <ModalInputItem
          name="Социальные сети"
          value={social_network}
          setValue={setSocial_network}
        />
        <ModalInputItem
          name="category_cloud_number"
          value={category_cloud_number}
          setValue={setCategory_cloud_number}
        />
        <ModalInputItem
          name="card_view"
          value={card_view}
          setValue={setCard_view}
        />
        <ModalInputItem
          name="site_grid_view"
          value={site_grid_view}
          setValue={setSite_grid_view}
        />
        <ModalInputItem
          name="site_detail_view"
          value={site_detail_view}
          setValue={setSite_detail_view}
        />
        <button type="submit" className=" my-5 p-2 bg-blue-500 text-white">
          Применить изменения
        </button>
      </form>
    </>
  )
}

export { ShopConfigEditModal }
