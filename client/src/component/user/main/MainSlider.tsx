import { ReactElement } from 'react'
import { FC } from 'react'
import Slider, { Settings } from 'react-slick'
import { mainPageStore } from '../../../store/MainPageStore'

import './slickSliderTheme.css'

const MainSlider: FC = (): ReactElement => {
  // Slider config
  const settings: Settings = {
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  return (
    <Slider className={'relative w-full my-4'} {...settings}>
      {mainPageStore.sliderData.map(slide => (
        <div className={'relative'}>
          <img  style={{
            height: '400px'
          }} className="w-full object-cover rounded-lg" src={slide.url} alt={`Слайд: ${slide.title}`} />
          <p className="absolute top-0 right-0 w-full text-right text-xl mt-10
           py-4 px-10 sliderTitle">
            {slide.title}
          </p>
        </div>
      ))}
    </Slider>
  )
}

export { MainSlider }
