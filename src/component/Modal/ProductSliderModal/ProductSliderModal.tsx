import { FC, ReactElement, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { modalStateStore } from '../../../store/ModalStateStore'
import ProductApi from '../../../http/ProductApi'
import { TProductPageDataImages } from '../../../types'
import { REACT_API_URL } from '../../../config'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import './ProductSliderModal.css'
import { useTransition, animated } from 'react-spring'
import { nanoid } from 'nanoid'

const ProductSliderModal: FC = observer((): ReactElement => {
  const isShowing = modalStateStore.productSliderWidgetState.isShowing
  const productId = modalStateStore.productSliderWidgetState.productId
  const [images, setImages] = useState<TProductPageDataImages>()

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
    if (productId) {
      ProductApi.fetchOneProduct(productId).then(data => setImages(data.images))
    }
  }, [productId])

  const close = () =>
    (modalStateStore.productSliderWidgetState = {
      isShowing: false,
      productId: '',
    })

  if (images)
    return (
      <>
        {transitionBackground(
          (style, item) =>
            item && (
              <animated.div
                className="md:px-20 lg:px-32 xl:px-64 z-40 fixed w-screen h-screen
        inset-0 overflow-hidden flex justify-center items-center bg-black
        bg-opacity-75"
                onClick={() => close()}
                key={nanoid()}
                style={style}
              >
                {transitionModal(
                  (style, item) =>
                    item && (
                      <animated.div
                        style={style}
                        key={nanoid()}
                        onClick={e => e.stopPropagation()}
                      >
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
                                className="absolute mr-10 z-50 absolute top-0 right-0 bg-white rounded-full text-red-600"
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
                            </div>
                          ))}
                        </Carousel>
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

export { ProductSliderModal }
