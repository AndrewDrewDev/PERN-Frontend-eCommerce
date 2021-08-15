import { ReactElement } from 'react'
import { FC } from 'react'
import Slider, { Settings } from 'react-slick'
import './ProductSlider.css'

type TProductSlider = {
  images: string[]
}

const ProductSlider: FC<TProductSlider> = ({ images }): ReactElement => {
  const PrevArrow: ReactElement = (
    <div>
      <svg
        className="w-14 h-14 text-gray-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </div>
  )

  const NextArrow: ReactElement = (
    <div>
      <svg
        className="w-14 h-14 text-gray-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </div>
  )

  const settings: Settings = {
    dots: true,
    infinite: true,
    lazyLoad: 'ondemand',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: PrevArrow,
    nextArrow: NextArrow,
    customPaging: index => {
      return (
        <button
          className="border focus:outline-none w-24 h-24 md:w-28 md:h-28
         flex items-center justify-center p-1 rounded-lg"
        >
          <img className="object-contain h-full" src={images[index]} alt="" />
        </button>
      )
    },
  }

  return (
    <Slider className="rounded-lg  mb-4 border shadow-lg" {...settings}>
      {images.map(img => (
        <img className="h-64 md:h-80 object-contain" src={img} alt="" />
      ))}
    </Slider>
  )
}

export { ProductSlider }
