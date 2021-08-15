import { ReactElement } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { infoPagesStore } from '../../../store/InfoPagesStore'
import { TPageData } from '../../../types'

const InfoContent: FC = (): ReactElement => {
  const [data, setData] = useState<TPageData | null>(null)
  // Get selected page name http://localhost:3000/info/ID => ID
  const id: string = useLocation().pathname.split('/').pop()!

  useEffect(() => {
    switch (id) {
      case 'about':
        setData(infoPagesStore.aboutData)
        break
      case 'delivery':
        setData(infoPagesStore.deliverytData)
        break
      case 'faqs':
        setData(infoPagesStore.faqsData)
        break
      case 'payment':
        setData(infoPagesStore.paymentData)
        break
      case 'public-offer':
        setData(infoPagesStore.publicOfferData)
        break
      case 'warranty':
        setData(infoPagesStore.warrantyPageData)
        break
    }
  }, [])

  return (
    <div className="container relative mx-auto px-6 text-gray-600 my-3">
      <h1 className="mt-2 text-gray-700 text-2xl font-medium md:text-center">
        {data?.title}
      </h1>
      <hr className="mb-3" />
      {data?.imgUrlFloatLeftTop ? (
        <img
          className="lazy w-full mx-auto lg:float-left px-4 entered loaded"
          style={{
            width: '450px',
          }}
          alt="О магазине"
          src={data?.imgUrlFloatLeftTop}
        />
      ) : null}
      {data?.content}
      {data?.imgUrlWidthFullBottom ? (
        <img
          className="lazy mx-auto entered loaded w-4/5"
          data-src="img/about-2.svg"
          alt="О нас"
          data-ll-status="loaded"
          src={data?.imgUrlWidthFullBottom}
        />
      ) : null}
    </div>
  )
}

export { InfoContent }
