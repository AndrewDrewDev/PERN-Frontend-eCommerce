import { ReactElement } from 'react'
import { FC } from 'react'
import { TPageData } from '../../types'
import textToHtml from '../../utils/textToHtml'

const InfoContent: FC<TPageData> = ({ title, content, img }): ReactElement => {
  let imgFloat = ''
  let imgBigBottomWFull = ''
  if (img && img[0]) imgFloat = img[0]
  if (img && img[1]) imgBigBottomWFull = img[1]

  return (
    <div className="relative text-gray-600">
      <h1 className="mt-2 text-gray-700 text-3xl font-medium text-center">
        {title}
      </h1>
      <hr className="mb-3" />
      {imgFloat ? (
        <img
          className="lazy border w-full shadow-lg rounded-lg mx-auto lg:float-left pr-4 pb-4 entered loaded"
          style={{
            width: '450px',
          }}
          alt="О магазине"
          src={process.env.REACT_APP_API_URL + imgFloat}
        />
      ) : null}
      {textToHtml(content)}
      {imgBigBottomWFull ? (
        <img
          className="mx-auto shadow-lg rounded-lg entered loaded w-4/5"
          alt="О нас"
          src={process.env.REACT_APP_API_URL + imgBigBottomWFull}
        />
      ) : null}
    </div>
  )
}

export { InfoContent }
