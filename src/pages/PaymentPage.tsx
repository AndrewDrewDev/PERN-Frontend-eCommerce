import { PaymentProgressBar } from '../component/user/payment/PaymentProgressBar'
import { FC, ReactElement, useState } from 'react'
import { PaymentCartForm } from '../component/user/payment/PaymentCartForm'
import { PaymentCheckout } from '../component/user/payment/PaymentCheckout'
import Spinner from '../component/user/common/Spinner'
import { TPaymentCheckoutOrderData } from '../types'

export type TPaymentPageNames = 'cart' | 'checkout' | 'payment' | 'spinner'

const PaymentPage: FC = (): ReactElement => {
  const [pageName, setPageName] = useState<TPaymentPageNames>('cart')
  const [order, setOrder] = useState<TPaymentCheckoutOrderData>()

  return (
    <>
      {pageName === 'spinner' ? <Spinner /> : null}
      {pageName === 'cart' ? (
        <>
          <PaymentProgressBar step={1} />
          <PaymentCartForm
            handleSetPageName={setPageName}
            handleSetOrder={setOrder}
          />
        </>
      ) : null}
      {pageName === 'checkout' ? (
        <>
          <PaymentProgressBar step={2} />
          <PaymentCheckout handleSetPageName={setPageName} orderData={order} />
        </>
      ) : null}
      {pageName === 'payment' ? (
        <>
          <h1 className="text-9xl text-center my-10">
            Тут когда нибудь будет оплата!
          </h1>
        </>
      ) : null}
    </>
  )
}

export { PaymentPage }
