import { FC, ReactElement, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { modalStateStore } from '../../../store/ModalStateStore'
import ProductApi from '../../../http/ProductApi'
import { TProductPageDataImages } from '../../../types'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import './ProductSliderModal.css'
import { useTransition, animated } from 'react-spring'
import { nanoid } from 'nanoid'

const ProductSliderModal: FC = observer((): ReactElement => {
  const isShowing = modalStateStore.productSliderWidgetState.isShowing
  const productId = modalStateStore.productSliderWidgetState.productId
  const [images, setImages] = useState<TProductPageDataImages | null>(null)

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
    ;(async () => {
      const data = await ProductApi.fetchOneProduct(productId)
      setImages(data.images)
    })()
  }, [productId])

  const close = () => {
    modalStateStore.productSliderWidgetState = {
      isShowing: false,
      productId: '',
    }
  }

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
                      {images && (
                        <Carousel emulateTouch={true} showStatus={false}>
                          {images.big.map(img => (
                            <div
                              className="w-full flex justify-center"
                              style={{ maxHeight: '500px' }}
                            >
                              <img
                                key={img}
                                className=" items-center object-contain"
                                src={process.env.REACT_APP_API_URL + img}
                                alt="Изображение товара"
                              />
                            </div>
                          ))}
                        </Carousel>
                      )}
                    </animated.div>
                  )
              )}
            </animated.div>
          )
      )}
    </>
  )
})

export { ProductSliderModal }
