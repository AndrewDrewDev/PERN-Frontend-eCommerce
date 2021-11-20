import { ProgressBar } from '../component/Payment/ProgressBar/ProgressBar'
import { FC, ReactElement, useState } from 'react'
import { CartForm } from '../component/Payment/CartForm/CartForm'
import { Checkout } from '../component/Payment/Checkout/Checkout'
import ContentLoadingSpinner from '../component/Loaders/ContentLoadingSpinner/ContentLoadingSpinner'
import { TPaymentCheckoutOrderData } from '../types'

export type TPaymentPageNames = 'cart' | 'checkout' | 'payment' | 'spinner'

const PaymentPage: FC = (): ReactElement => {
  const [pageName, setPageName] = useState<TPaymentPageNames>('cart')
  const [order, setOrder] = useState<TPaymentCheckoutOrderData>()

  return (
    <>
      {pageName === 'spinner' ? <ContentLoadingSpinner /> : null}
      {pageName === 'cart' ? (
        <>
          <ProgressBar step={1} />
          <CartForm handleSetPageName={setPageName} handleSetOrder={setOrder} />
        </>
      ) : null}
      {pageName === 'checkout' ? (
        <>
          <ProgressBar step={2} />
          <Checkout handleSetPageName={setPageName} orderData={order} />
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
