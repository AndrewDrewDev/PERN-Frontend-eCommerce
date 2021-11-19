import { FC, ReactElement, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { modalStateStore } from '../../store/ModalStateStore'
import { TAddItemCartStore, TProductPageData } from '../../types'
import ProductApi from '../../http/ProductApi'
import { Breadcrumb } from '../Product/Breadcrumb'
import { ProductSlider } from '../Product/ProductSlider'
import textToHtml from '../../utils/textToHtml'
import { ProductInStock } from '../Product/ProductInStock'
import { ProductPrice } from '../Product/ProductPrice'
import { ProductCounter } from '../Product/ProductCounter'
import { cartStore } from '../../store/CartStateStore'
import { Link } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import { nanoid } from 'nanoid'

const ProductQuickViewModal: FC = observer((): ReactElement => {
  const isShowing = modalStateStore.productQuickViewWidgetState.isShowing
  const productId = modalStateStore.productQuickViewWidgetState.productId

  const [product, setProduct] = useState<TProductPageData | null | undefined>()
  const transitionModal = useTransition(isShowing, {
    from: { y: -50, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 50, opacity: 0 },
  })
  const transitionBackground = useTransition(isShowing, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  useEffect(() => {
    if (productId)
      ProductApi.fetchOneProduct(productId).then(data => setProduct(data))
  }, [productId])

  if (product)
    return (
      <>
        {transitionBackground(
          (style, item) =>
            item && (
              <animated.div
                className="fixed inset-0 w-full h-screen flex justify-center
                items-center z-50 bg-black bg-opacity-50 overflow-y-hidden"
                onClick={() => close()}
                key={nanoid()}
                style={style}
              >
                {transitionModal(
                  (style, item) =>
                    item && (
                      <animated.div
                        className="relative text-gray-700 bg-white my-5 py-5 px-5
                  rounded-xl w-11/12 md:w-4/5 overflow-auto"
                        onClick={e => e.stopPropagation()}
                        key={nanoid()}
                        style={{ ...style, maxHeight: '95%' }}
                      >
                        <button
                          className="absolute right-0 top-0 text-red-500 m-2
                     rounded-full focus:outline-none"
                          onClick={() => close()}
                        >
                          <svg
                            className="w-10 h-10"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <div className="text-gray-700 text-3xl title-font font-medium my-1">
                          {product.name}
                        </div>
                        <Breadcrumb
                          categories={product.categories}
                          lastName={product.name}
                        />
                        <div className="mx-auto flex flex-wrap">
                          <ProductSlider images={product.images.big} />
                          <ProductInfoQuickView product={product} />
                        </div>
                      </animated.div>
                    )
                )}
              </animated.div>
            )
        )}
      </>
    )

  return <></>
})

type TProductInfoQuickView = { product: TProductPageData }

const ProductInfoQuickView: FC<TProductInfoQuickView> = ({
  product,
}): ReactElement => {
  const [cartData, setCartData] = useState<TAddItemCartStore>({
    id: product.id,
    name: product.name,
    img: product.images.preview,
    price: product.price,
    count: 1,
  })

  useEffect(() => {
    setCartData({
      id: product.id,
      name: product.name,
      img: product.images.preview,
      price: product.price,
      count: 1,
    })
  }, [product])

  const setCount = (value: number): void => {
    const newObj = { ...cartData }
    newObj.count = value
    setCartData(newObj)
  }

  return (
    <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0 text-gray-600">
      <div className="flex mb-1 mt-1 text-sm text-green-600 mx-auto">
        <ProductInStock status={product.status} />
      </div>
      <ProductPrice price={product.price} />
      <div className="border" />
      <div className="border rounded max-h-72 overflow-auto pretty-scroll">
        {product.description
          ? textToHtml(product.description)
          : 'Описание отсутствует'}
      </div>
      <Link
        to={'/product/' + product.id}
        onClick={() => close()}
        className="underline text-gray-700"
      >
        Читать больше...
      </Link>
      <div className="border" />
      <div className="flex items-center">
        <ProductCounter callback={setCount} />
        <div className="flex flex-wrap my-2">
          <button
            className="item_add border-2 border-blue-600
        hover:border-blue-700 shadow hover:shadow-lg duration-500 flex
        text-white bg-blue-500 py-2 px-6 focus:outline-none
        hover:bg-blue-400 rounded"
            id="s1"
            onClick={() => (cartStore.addItem = cartData)}
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  )
}

const close = () =>
  (modalStateStore.productQuickViewWidgetState = {
    isShowing: false,
    productId: '',
  })

export { ProductQuickViewModal }
