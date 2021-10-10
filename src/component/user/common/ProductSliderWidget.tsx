import { FC, ReactElement, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { modalStateStore } from '../../../store/ModalStateStore'
import ProductApi from '../../../http/ProductApi'
import { TProductPageDataImages } from '../../../types'
import config from '../../../config'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import './ProductSliderWidget.css'

const ProductSliderWidget: FC = observer((): ReactElement => {
  const isShowing = modalStateStore.productSliderWidgetState.isShowing
  const productId = modalStateStore.productSliderWidgetState.productId
  const [images, setImages] = useState<TProductPageDataImages>()

  useEffect(() => {
    if (productId) {
      ProductApi.fetchOneProduct(productId).then(data => setImages(data.images))
    }
  }, [productId])

  if (isShowing && images)
    return (
      <div className="p-2 z-40 fixed w-screen h-screen inset-0 overflow-hidden flex justify-center items-center bg-black bg-opacity-75">
        <button
          className="fixed top-0 right-0 z-50 mt-32 mr-3"
          onClick={e =>
            (modalStateStore.productSliderWidgetState = {
              isShowing: false,
              productId: '',
            })
          }
        >
          X
        </button>
        <Carousel emulateTouch={true} showStatus={false}>
          {images.big.map((img, i) => (
            <div
              className="w-full flex justify-center"
              style={{ maxHeight: '500px' }}
            >
              <img
                key={i}
                className="flex justify-center items-center object-contain"
                src={config.REACT_API_URL + img}
              />
            </div>
          ))}
        </Carousel>
      </div>
    )

  return <></>
})

export { ProductSliderWidget }
