import { ReactElement } from 'react'
import { FC } from 'react'
import Slider, { Settings } from 'react-slick'

import './MainSlider.css'
import { shopConfigStore } from '../../../store/ShopConfigStore'
import { observer } from 'mobx-react-lite'

const MainSlider: FC = observer((): ReactElement => {
  // Slider config
  const settings: Settings = {
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
  }

  return (
    <>
      {shopConfigStore.slider && (
        <Slider className="relative w-full my-4" {...settings}>
          {shopConfigStore.slider.map(slide => (
            <div className="relative">
              <img
                className="w-full h-96 object-cover rounded-lg"
                src={process.env.REACT_APP_API_URL + slide.img}
                alt={`Слайд: ${slide.title}`}
              />
              <p
                className="absolute top-0 right-0 w-full text-right
                md:text-lg mt-10 py-2 md:py-4 px-10 sliderTitle"
              >
                {slide.title}
              </p>
            </div>
          ))}
        </Slider>
      )}
    </>
  )
})

export { MainSlider }
