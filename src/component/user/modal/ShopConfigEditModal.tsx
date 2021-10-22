import { observer } from 'mobx-react-lite'
import {
  createContext,
  FC,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from 'react'
import { TShopConfig, TShopCustomCategoryProducts } from '../../../types'
import { modalStateStore } from '../../../store/ModalStateStore'
import { ModalInputItem, ModalWrapper } from './ModalComponents'
import Spinner from '../common/Spinner'
import ShopApi from '../../../http/ShopApi'
import { shopConfigStore } from '../../../store/ShopConfigStore'
import config from '../../../config'
import { Dispatch } from 'react'
import { SetStateAction } from 'react'

// TODO: Add types for context instead any

type TShopConfigEditModalContext = {
  shopConfig: TShopConfig
  setShopConfig: Dispatch<SetStateAction<TShopConfig | null | undefined>>
}

const ShopConfigEditModalContext = createContext<TShopConfigEditModalContext>(
  {} as any
)

const ShopConfigEditModal = observer(() => {
  const [shopConfig, setShopConfig] = useState<TShopConfig | null | undefined>()

  const isShowing = modalStateStore.shopConfigEditModalState.isShowing
  console.log(isShowing)
  const close = () => {
    modalStateStore.shopConfigEditModalState.isShowing = false
    setShopConfig(undefined)
  }

  useEffect(() => {
    setShopConfig(null)
    ShopApi.fetchConfig().then(data => setShopConfig(data))
  }, [isShowing])

  if (isShowing && shopConfig && setShopConfig)
    return (
      <ShopConfigEditModalContext.Provider
        value={{
          shopConfig,
          setShopConfig,
        }}
      >
        <ModalWrapper closeHandler={close}>
          {isShowing && shopConfig ? <ProductEditModalBody /> : null}
          {shopConfig === null ? <Spinner /> : null}
        </ModalWrapper>
      </ShopConfigEditModalContext.Provider>
    )
  return <div className="text-center text-xl">Что-то пошло не так!</div>
})

////// ProductEditModalBody

const ProductEditModalBody: FC = () => {
  // Define context
  const context = useContext(ShopConfigEditModalContext)

  // Define base shop config field
  const [title, setTitle] = useState(context.shopConfig.title)
  const [sub_title, setSub_title] = useState(context.shopConfig.sub_title)
  const [id, setId] = useState(context.shopConfig.id)
  const [base_link, setBase_link] = useState(context.shopConfig.base_link)
  const [address, setAddress] = useState(context.shopConfig.address)
  const [phone, setPhone] = useState(context.shopConfig.phone)
  const [email, setEmail] = useState(context.shopConfig.email)
  const [pagination_number, setPagination_number] = useState(
    context.shopConfig.pagination_number
  )
  const [currency, setCurrency] = useState(context.shopConfig.currency)
  const [catalog_page, setCatalog_page] = useState(
    context.shopConfig.catalog_page
  )
  const [category_number, setCategory_number] = useState(
    context.shopConfig.category_number
  )
  const [copyright, setCopyright] = useState(context.shopConfig.copyright)
  const [social_network, setSocial_network] = useState(
    context.shopConfig.social_network
  )
  const [category_cloud_number, setCategory_cloud_number] = useState(
    context.shopConfig.category_cloud_number
  )
  const [card_view, setCard_view] = useState(context.shopConfig.card_view)
  const [site_grid_view, setSite_grid_view] = useState(
    context.shopConfig.site_grid_view
  )
  const [site_detail_view, setSite_detail_view] = useState(
    context.shopConfig.site_detail_view
  )

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const updateConfigSubmitData: TShopConfig = {
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

////// EditCustomCategoryProducts

type TEditCustomCategoryProducts = {
  categoryName: string
}
const EditCustomCategoryProducts: FC<TEditCustomCategoryProducts> = ({
  categoryName,
}) => {
  const [products, setProducts] = useState<TShopCustomCategoryProducts | null>()
  const [popupValue, setPopupValue] = useState('')
  const [popupShow, setPopupShow] = useState(false)
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    ShopApi.fetchCustomCategoryProducts(categoryName).then(data =>
      setProducts(data)
    )
  }, [update])

  const createProductItem = async (id: string) => {
    await ShopApi.createCustomCategoryProduct(categoryName, { data: id }).then(
      () => {
        setPopupShow(false)
        setUpdate(!update)
      }
    )
  }

  const deleteProductItem = async (id: string) => {
    await ShopApi.deleteCustomCategoryProduct(categoryName, { data: id }).then(
      () => setUpdate(!update)
    )
  }

  return (
    <>
      <div className="w-3/4 my-2">
        <div className="flex items-center justify-center text-xl text-center border-b-2 border-blue-600 py-1 my-2">
          <span>Пользовательская категория: </span>
          <span className="text-gray-700 font-bold">{categoryName}</span>

          <div className="relative">
            <button
              className="ml-3 bg-green-500 border-2 border-green-600 rounded-lg text-white"
              type="button"
              onClick={() => setPopupShow(!popupShow)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </button>
            {popupShow ? (
              <div className="absolute flex flex-col items-center text-white bg-blue-500 px-3 py-2 rounded-lg">
                <span className="text-xs py-1">Введите ID товара</span>
                <div className="flex">
                  <input
                    className="px-2 bg-white rounded-l text-gray-700 focus:outline-none w-20"
                    type="text"
                    name="Введите ID товара"
                    value={popupValue}
                    onChange={e => setPopupValue(e.target.value)}
                  />
                  <button
                    type="button"
                    className="bg-green-500 rounded-r flex items-center"
                    onClick={() => createProductItem(popupValue)}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div>
          {products && products.length !== 0 ? (
            products.map((product, i) => (
              <div key={i} className="flex items-center">
                <div className="border-2 bg-blue-200 flex justify-between items-center rounded-lg w-full">
                  <img
                    className="h-10 w-10 "
                    src={config.REACT_API_URL + product.img}
                    alt={product.name}
                  />
                  <span className=" px-2 flex justify-center w-full">
                    {product.name}
                  </span>
                  <button
                    className="flex items-center bg-red-500 border-2 border-red-600 rounded-r-lg text-white w-10 h-10"
                    title="Удалить"
                    type="button"
                    onClick={() => deleteProductItem(product.id)}
                  >
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-lg">Пусто</div>
          )}
        </div>
      </div>
    </>
  )
}

export { ShopConfigEditModal }
