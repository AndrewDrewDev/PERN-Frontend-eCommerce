import { ReactElement } from 'react'
import { FC } from 'react'
import Slider, { Settings } from 'react-slick'
import './ProductSlider.css'
import { REACT_API_URL } from '../../config'

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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
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
          className="border-2 focus:outline-none w-24 h-24 md:w-28 md:h-28
         flex items-center justify-center p-1 m-1 rounded-lg"
        >
          <img
            className="object-contain h-full"
            src={REACT_API_URL + images[index]}
            alt=""
          />
        </button>
      )
    },
  }

  return (
    <div className="lg:w-1/2 w-full object-cover object-center">
      <Slider className="rounded-lg  mb-4 border shadow-lg" {...settings}>
        {images.map((img, i) => (
          <img
            key={i}
            id={img}
            className="h-64 md:h-80 object-contain"
            src={REACT_API_URL + img}
            alt=""
          />
        ))}
      </Slider>
    </div>
  )
}

export { ProductSlider }
