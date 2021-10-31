import {
  Dispatch,
  FC,
  FormEvent,
  ReactElement,
  SetStateAction,
  useState,
} from 'react'
import { observer } from 'mobx-react-lite'
import { cartStore } from '../../../store/CartStateStore'
import { TItemsCartStore, TPaymentCheckoutOrderData } from '../../../types'
import { Link } from 'react-router-dom'
import {REACT_API_URL} from '../../../config'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { TPaymentPageNames } from '../../../pages/PaymentPage'
import { shopConfigStore } from '../../../store/ShopConfigStore'

type TPaymentCartForm = {
  handleSetPageName: Dispatch<SetStateAction<TPaymentPageNames>>
  handleSetOrder: Dispatch<
    SetStateAction<TPaymentCheckoutOrderData | undefined>
  >
}

const PaymentCartForm: FC<TPaymentCartForm> = observer(
  ({ handleSetPageName, handleSetOrder }): ReactElement => {
    const [fullName, setFullName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [comment, setComment] = useState<string>('')

    const handleOnSubmit = (
      event: FormEvent<HTMLFormElement>,
      type: 'quick' | 'common'
    ): void => {
      const checkRow = (text: string): string => (text ? text : 'Не указано')
      const makeOrderIdByPhone = (phone: string): string => {
        // Example: '20211009'
        const date = new Date().toISOString().split('T')[0].replace(/-/g, '')
        const phoneElem = phone.substring(phone.length - 4)
        return `${date}-${phoneElem}`
      }

      const data: TPaymentCheckoutOrderData = {
        orderId: makeOrderIdByPhone(phone),
        finalCount: cartStore.getFinalCount,
        finalTotal: cartStore.getFinalTotal,
        products: cartStore.getItems,
        fullName: checkRow(fullName),
        address: checkRow(address),
        type,
        phone: checkRow(phone),
        email: checkRow(email),
        comment: checkRow(comment),
      }

      handleSetPageName('checkout')
      handleSetOrder(data)

      event.preventDefault()
    }

    const [tabIndex, setTabIndex] = useState(0)

    return (
      <>
        <div className="w-full border-solid rounded-lg border-4 border-light-blue-500 p-1 shadow-xl">
          <div className="text-gray-700 text-center font-bold text-3xl mt-1 mb-5">
            <h1>── Ваша Корзина ──</h1>
            <hr className="mt-1 mb-1" />
          </div>
          {cartStore.getItems.length !== 0 ? (
            cartStore.getItems.map((item, i) => <CartItem key={i} {...item} />)
          ) : (
            <div className="text-center text-gray-700 font-medium text-3xl my-20">
              Ваша корзина пуста, может ты что-то добавишь еблан?
            </div>
          )}
          <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
            <TabList className="flex mt-10">
              <Tab
                className="flex w-1/2 bg-gray-200"
                selectedClassName="bg-blue-200"
              >
                <button
                  className=" duration-500 w-full hover:bg-blue-200 text-gray-700 text-sm md:text-base font-semibold rounded-t focus:outline-none mx-px py-px md:py-2 px-3 md:px-4  border-white"
                  type="button"
                >
                  Оформление заказа
                </button>
              </Tab>
              <Tab
                className="flex w-1/2 bg-gray-200"
                selectedClassName="bg-blue-200"
              >
                <button
                  className="flex duration-500 mx-auto w-full hover:bg-blue-200 text-gray-700 text-sm md:text-base font-semibold rounded-t focus:outline-none mx-px py-px md:py-2 px-3 md:px-4"
                  type="button"
                >
                  <div className="flex px-2 my-2 md:px-0 md:my-0 md:justify-center mx-auto">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                      кажите номер телефона и ожидайте звонка
                    </svg>
                    <span className="ml-1">Быстрый заказ</span>
                  </div>
                </button>
              </Tab>
            </TabList>
            <div className="mt-10 bg-white text-sm rounded-b p-4">
              <TabPanel>
                <div>
                  <div className="flex flex-col text-xl block md:float-right text-lg text-center md:text-right text-gray-600">
                    <div>
                      <span>Количество: </span>
                      <span className="text-red-600">
                        {cartStore.getFinalCount}
                      </span>
                      <span> шт.</span>
                    </div>
                    <div>
                      <span>К оплате: </span>
                      <span className="text-red-600">
                        {cartStore.getFinalTotal}{' '}
                        {shopConfigStore.config.currency}
                      </span>
                    </div>
                    <div className="flex justify-center md:justify-end mt-2">
                      <button
                        className="flex duration-500 focus:outline-none text-white text-sm p-2 rounded-md bg-blue-600 hover:bg-blue-500 hover:shadow-lg"
                        onClick={() => cartStore.removeAll()}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        <span className="ml-1">Очистить корзину</span>
                      </button>
                    </div>
                  </div>
                  <div className="text-lg font-light text-left text-gray-600 w-full max-w-lg mt-3 md:mt-0">
                    <p>
                      Укажите необходимую информацию для оформления обычного
                      заказа, или воспользуйтесь формой "
                      <a className="underline cursor-pointer">Быстрый заказ</a>"
                      по телефону.
                    </p>
                  </div>
                  <form
                    onSubmit={e => handleOnSubmit(e, 'common')}
                    className="w-full mt-5"
                  >
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3 md:px-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Ваши ФИО
                        </label>
                        <input
                          className="appearance-none block w-full max-w-lg bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          name="full_name"
                          type="text"
                          placeholder="ФИО"
                          onChange={e => {
                            setFullName(e.target.value)
                          }}
                          value={fullName}
                          required={true}
                        />
                        <p className="text-gray-600 text-xs italic">
                          Пример: Петров Анатолий Сергеевич
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Ваш телефон
                        </label>
                        <input
                          className="appearance-none block w-full max-w-lg bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          name="phone"
                          type="text"
                          placeholder="+380449999999"
                          onChange={e => {
                            setPhone(e.target.value)
                          }}
                          value={phone}
                          required={true}
                        />
                        <p className="text-gray-600 text-xs italic">
                          Пример: +380449999999
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          E-mail
                        </label>
                        <input
                          className="appearance-none block w-full max-w-lg bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          name="email"
                          type="email"
                          placeholder="your.email@gmail.com"
                          onChange={e => {
                            setEmail(e.target.value)
                          }}
                          value={email}
                          required={true}
                        />
                        <p className="text-gray-600 text-xs italic">
                          Пример: your.email@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Адрес доставки
                        </label>
                        <input
                          className="appearance-none block w-full max-w-lg bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          name="address"
                          type="text"
                          placeholder="г.Киев, ул.Любая 8"
                          onChange={e => {
                            setAddress(e.target.value)
                          }}
                          value={address}
                          required={true}
                        />
                        <p className="text-gray-600 text-xs italic">
                          Пример: г.Киев, ул.Любая 8
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Коментарии к заказу
                        </label>
                        <textarea
                          className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                          name="message"
                          onChange={e => {
                            setComment(e.target.value)
                          }}
                          value={comment}
                        />
                      </div>
                    </div>
                    <div className="flex justify-center mt-2">
                      <div className="flex">
                        <button
                          type="submit"
                          className="flex duration-500 items-center p-2 px-10 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500 cursor-pointer"
                        >
                          <span className="mr-1">Оформить заказ</span>
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <div className="flex flex-col text-xl block md:float-right text-lg text-center md:text-right text-gray-600">
                    <div>
                      <span>Количество: </span>
                      <span className="text-red-600">
                        {cartStore.getFinalCount}
                      </span>
                      <span> шт.</span>
                    </div>
                    <div>
                      <span>К оплате: </span>
                      <span className="text-red-600">
                        {cartStore.getFinalTotal}{' '}
                        {shopConfigStore.config.currency}
                      </span>
                    </div>
                    <div className="flex justify-center md:justify-end mt-2">
                      <button
                        className="flex duration-500 focus:outline-none text-white text-sm p-2 rounded-md bg-blue-600 hover:bg-blue-500 hover:shadow-lg"
                        onClick={() => cartStore.removeAll()}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        <span className="ml-1">Очистить корзину</span>
                      </button>
                    </div>
                  </div>
                  <form
                    className="w-full mt-1"
                    onSubmit={e => handleOnSubmit(e, 'quick')}
                  >
                    <div className="text-lg font-light text-left text-gray-600 mb-5">
                      <p>Укажите номер телефона и ожидайте звонка:</p>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-3">
                      <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Ваш телефон
                        </label>
                        <input
                          className="appearance-none block w-full max-w-lg bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          type="text"
                          placeholder="+380449999999"
                          required={true}
                          value={phone}
                          onChange={e => setPhone(e.target.value)}
                        />
                        <p className="text-gray-600 text-xs italic">
                          Пример: +380449999999
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="relative duration-500 mx-auto py-2 mt-1 w-40 text-center float-left bg-blue-600 text-white font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                      >
                        <svg
                          className="absolute w-5 h-5 left-0 right-0 mx-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span className="ml-3">Быстрый заказ</span>
                      </button>
                    </div>
                  </form>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </>
    )
  }
)

const CartItem: FC<TItemsCartStore> = (props): ReactElement => {
  const { id, name, img, price, priceAll, count } = props
  return (
    <>
      <div className="border-solid border-1 border-light-blue-500 shadow-lg py-3 md:py-0 rounded-lg px-10 relative md:flex md:justify-between w-11/12 mx-auto mt-8">
        <div className="item_ID hidden">A208</div>
        <div className="py-2 w-48 mx-auto md:mx-0">
          <Link to={'/product/' + id}>
            <img
              className="object-contain h-48 w-full"
              src={REACT_API_URL + img}
              alt="Изображение товара"
            />
          </Link>
        </div>
        <div className="text-gray-700 my-auto w-full md:w-2/6">
          <Link to={'/product/' + id}>
            <div className="text-xl hover:underline text-center md:text-left font-medium">
              {name}
            </div>
          </Link>
          <div className=" text-center md:text-left text-gray-700">
            <span className="inline text-base ">Цена: </span>
            <span className="text-2xl text-red-600">{price} </span>
            <span className="">{shopConfigStore.config.currency}</span>
          </div>
          <div className="flex justify-center md:justify-start">
            <button
              className="text-gray-600 focus:outline-none focus:text-gray-600"
              onClick={() => (cartStore.decreaseItem = id)}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <div className="text-gray-700 mx-4 text-lg font-medium">
              <span>{count}</span>
            </div>
            <button
              className=" text-gray-600 focus:outline-none focus:text-gray-600"
              onClick={() => (cartStore.increaseItem = id)}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="my-auto text-center md:mb-auto">
          <div className="text-gray-700">
            <span className="inline">Всего: </span>
            <span className="text-2xl text-red-600">{priceAll} </span>
            <span>{shopConfigStore.config.currency}</span>
          </div>
        </div>
        <button
          className="absolute top-0 right-0 px-2 py-2"
          onClick={() => (cartStore.removeItem = id)}
        >
          ❌
        </button>
      </div>
    </>
  )
}

export { PaymentCartForm }
