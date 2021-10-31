import { FC, ReactElement, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { modalStateStore } from '../../../../store/ModalStateStore'
import ProductApi from '../../../../http/ProductApi'
import { TProductPageDataImages } from '../../../../types'
import { REACT_API_URL } from '../../../../config'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import './ProductSliderModal.css'

const ProductSliderModal: FC = observer((): ReactElement => {
  const isShowing = modalStateStore.productSliderWidgetState.isShowing
  const productId = modalStateStore.productSliderWidgetState.productId
  const [images, setImages] = useState<TProductPageDataImages>()

  useEffect(() => {
    if (productId) {
      ProductApi.fetchOneProduct(productId).then(data => setImages(data.images))
    }
  }, [productId])

  const close = () =>
    (modalStateStore.productSliderWidgetState = {
      isShowing: false,
      productId: '',
    })

  if (isShowing && images)
    return (
      <div
        className="md:px-20 lg:px-32 xl:px-64 z-40 fixed w-screen h-screen
        inset-0 overflow-hidden flex justify-center items-center bg-black
        bg-opacity-75"
        onClick={() => close()}
      >
        <div onClick={e => e.stopPropagation()}>
          <Carousel emulateTouch={true} showStatus={false}>
            {images.big.map((img, i) => (
              <div
                className="w-full flex justify-center"
                style={{ maxHeight: '500px' }}
              >
                <img
                  key={i}
                  className=" items-center object-contain"
                  src={REACT_API_URL + img}
                  alt="Изображение товара"
                />
                <button
                  className="mr-10 z-50 absolute top-0 right-0 bg-white text-red-600 border-2 rounded-full"
                  onClick={() => close()}
                >
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    )

  return <></>
})

export { ProductSliderModal }
