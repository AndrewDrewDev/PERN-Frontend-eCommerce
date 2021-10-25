import { Dispatch, FC, ReactElement, SetStateAction, useState } from 'react'
import { TItemsCartStore, TPaymentCheckoutOrderData } from '../../../types'
import { SuccessAlertModal } from '../modal/SuccessAlertModal'
import { TPaymentPageNames } from '../../../pages/PaymentPage'
import { Link } from 'react-router-dom'

type TPaymentCheckout = {
  handleSetPageName: Dispatch<SetStateAction<TPaymentPageNames>>
  orderData: TPaymentCheckoutOrderData | undefined
}

const PaymentCheckout: FC<TPaymentCheckout> = ({
  handleSetPageName,
  orderData,
}): ReactElement => {
  const [showModal, setShowModal] = useState(true)
  return (
    <>
      <SuccessAlertModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title="Заказ успешно отправлен!"
        message="Спасибо за Ваш заказ! Мы свяжемся с Вами в самое ближайшее
                время."
      />

      {orderData ? (
        <div className="w-full border-solid rounded-lg border-4 border-light-blue-500 p-3 shadow-xl">
          <div className="w-11/12 mx-auto">
            <div className="text-gray-700 text-center text-3xl mt-1 mb-5 font-bold">
              <h1>
                <span className="hidden md:inline">──</span> Оформление Заказа{' '}
                <span className="hidden md:inline">──</span>
              </h1>
              <hr className="mt-1 mb-1" />
            </div>
            <OrderInfo orderData={orderData} />
            <div className="overscroll-x-contain overflow-auto mb-4 md:mb-5">
              <table
                id="order_table_content"
                className="rounded-t-lg my-2 w-full mx-auto text-white bg-blue-500 shadow-lg"
              >
                <tbody>
                  <tr className="text-left border-b-2 border-gray-300">
                    <th className="px-3 py-3 text-center">Код</th>
                    <th className="px-3 py-3">Наименование</th>
                    <th className="px-3 py-3 text-center">Кол-во</th>
                    <th className="px-3 py-3 text-center">Цена</th>
                    <th className="px-3 py-3 text-center">Сумма</th>
                  </tr>
                </tbody>
                <tbody>
                  {orderData.products.map((product, i) => (
                    <TableProductItem {...product} />
                  ))}
                  <tr className="bg-gray-100 border-t-2 border-gray-300">
                    <td className="px-3 py-3 text-gray-800"></td>
                    <td className="px-3 py-3 text-gray-800 text-right">
                      Итого:
                    </td>
                    <td className="px-3 py-3 text-gray-800 text-center">
                      <span className="simpleCart_quantity">
                        {orderData.finalCount}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-gray-800 text-center">-</td>
                    <td className="px-3 py-3 text-gray-800 text-center">
                      <span className="simpleCart_finalTotal font-bold">
                        {orderData.finalTotal}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="flex justify-center mt-5">
                {orderData.type === 'common' ? (
                  <button
                    className="flex items-center duration-500 justify-center py-1 px-1 md:px-3 bg-blue-600 hover:bg-blue-500 text-white text-lg rounded-md shadow-md mt-2"
                    onClick={() => handleSetPageName('payment')}
                  >
                    <span className="mr-1 text-center">Перейти к оплате</span>
                  </button>
                ) : (
                  <Link
                    to="/"
                    className="flex items-center duration-500 justify-center py-1 px-1 md:px-3 bg-blue-600 hover:bg-blue-500 text-white text-lg rounded-md shadow-md mt-2"
                  >
                    <span className="mr-1 text-center">Вернутся в магазин</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-3xl text-center my-10">Что-то пошло не так!</div>
      )}
    </>
  )
}

const TableProductItem: FC<TItemsCartStore> = ({
  name,
  count,
  price,
  id,
  priceAll,
}) => {
  return (
    <>
      <tr className="bg-gray-100 border-b border-gray-200">
        <td className="px-3 py-3 text-gray-800 text-center">{id}</td>
        <td className="px-3 py-3 text-gray-800">{name}</td>
        <td className="px-3 py-3 text-gray-800 text-center">{count}</td>
        <td className="px-3 py-3 text-gray-800 text-center">{price}</td>
        <td className="px-3 py-3 text-gray-800 text-center">{priceAll}</td>
      </tr>
    </>
  )
}

type TOrderInfo = {
  orderData: TPaymentCheckoutOrderData | undefined
}

const OrderInfo: FC<TOrderInfo> = ({ orderData }): ReactElement => {
  if (!orderData) return <div>Что-то пошло не так!</div>

  return (
    <>
      <div className="mx-auto w-full md:text-left shadow-lg my-4 w-full">
        <div className="px-6 py-2 bg-gray-100 text-gray-800 border-b border-gray-200 font-bold text-center text-2xl">
          Ваш Заказ: № {orderData.orderId}
        </div>
        <div className="px-6 py-2 text-left bg-white border-b text-blue-600 border-gray-200">
          {orderData.type === 'quick' ? (
            <>
              <p id="p_phone" className="font-bold border-b">
                Контактный Телефон:{' '}
                <span id="phone" className="text-gray-800 text-lg font-normal">
                  {orderData.phone}
                </span>
              </p>
            </>
          ) : (
            <>
              <p id="p_full_name" className="font-bold border-b">
                ФИО:{' '}
                <span
                  id="full_name"
                  className="text-gray-800 text-lg font-normal"
                >
                  {orderData.fullName}
                </span>
              </p>
              <p id="p_phone" className="font-bold border-b">
                Контактный Телефон:{' '}
                <span id="phone" className="text-gray-800 text-lg font-normal">
                  {orderData.phone}
                </span>
              </p>
              <p id="p_email" className="font-bold border-b">
                Контактный Email:{' '}
                <span id="email" className="text-gray-800 text-lg font-normal">
                  {orderData.email}
                </span>
              </p>
              <p id="p_address" className="font-bold border-b">
                Адрес Доставки:{' '}
                <span
                  id="address"
                  className="text-gray-800 text-lg font-normal"
                >
                  {orderData.address}
                </span>
              </p>
              <p id="p_message" className="font-bold border-b">
                Комментарии к Заказу:
              </p>
              <p
                id="message"
                className="overflow-auto text-gray-700 text-lg font-normal"
              >
                {orderData.comment}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export { PaymentCheckout }
