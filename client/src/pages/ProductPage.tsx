import { FC, ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumb } from '../component/user/product/Breadcrumb'
import { ProductSlider } from '../component/user/product/ProductSlider'
import { TFullProductData } from '../store/types'

const ProductPage: FC = (): ReactElement => {
  const { id }: { id: string } = useParams()

  const data: TFullProductData = {
    d691_exCategory1: 'Категория1',
    d692_exCategory2: 'Категория2',
    d693_exCategory3: 'Категория3',
    d691_exCategory1EN: 'Kategoria1',
    d692_exCategory2EN: 'Kategoria2',
    d693_exCategory3EN: 'Kategoria3',
    d720_exProductID: '0115-0101-00016',
    d721_exProductName: 'Название товара',
    d734_exProductNew: '',
    d735_exProductDiscounts: '@',
    d802_exPriceSell: '310.00',
    d781_exEd: 'шт.',
    d723_exProductDescription: 'Описание товара',
    d748_exProductAmountRemaind: '',
    d722_exProductInStock: 'да',
    d747_exProductCodeVender: '',
    d803_exPriceOldSell: '400.00',
    d738_exProductManufacturer: '',
    REST_imgUrl: {
      preview:
        'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      other: [
        'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-1b.jpg',
        'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-2b.jpg',
        'https://siteup.com.ua/demo/msk/child-safety/img-product/790557-1b.jpg',
        'https://siteup.com.ua/demo/msk/child-safety/img-product/790557-2b.jpg',
        'https://siteup.com.ua/demo/msk/child-safety/img-product/790557-3b.jpg',
        'https://siteup.com.ua/demo/msk/child-safety/img-product/790557-4b.jpg',
        'https://siteup.com.ua/demo/msk/tupperware/img-product/B19-1b.jpg',
        'https://siteup.com.ua/demo/msk/tupperware/img-product/B19-2b.jpg',
        'https://siteup.com.ua/demo/msk/tupperware/img-product/B19-3b.jpg',
        'https://siteup.com.ua/demo/msk/tupperware/img-product/B19-4b.jpg',
      ],
    },
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-gray-700 text-3xl title-font font-medium mb-1">
        {data.d721_exProductName}
      </h1>
      <Breadcrumb
        category1={data.d691_exCategory1}
        category1EN={data.d691_exCategory1EN}
        category2={data.d692_exCategory2}
        category2EN={data.d692_exCategory2EN}
        category3={data.d693_exCategory3}
        category3EN={data.d693_exCategory3EN}
        finalName={data.d721_exProductName}
      />
      <div className="mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full object-cover object-center">
          <ProductSlider images={data.REST_imgUrl.other} />
        </div>
        <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0">
          <h1 className="item_name hidden">Контейнер «Свежесть» (5,5 л)</h1>
          <div className="flex mb-1 mt-1 text-sm text-green-600 mx-auto">
            <div className="flex px-1 rounded bg-green-200 border border-green-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="ml-1">Товар в наличии</p>
            </div>
          </div>
          <div className="mx-auto mt-1">
            <div className="text-lg text-gray-700">
              Старая Цена:{' '}
              <span className="title-font ml-2 line-through font-medium text-xl text-gray-600">
                2969.00 руб.
              </span>
            </div>
          </div>
          <div className="mx-auto mb-1">
            <div className="text-xl text-gray-700">
              Цена:{' '}
              <span className="item_price title-font font-medium text-2xl text-red-500">
                2699.00 руб.
              </span>
            </div>
          </div>
          <div className="my-1">
            <div className="">
              Производитель: <span className="">Tupperware</span>
            </div>
            <div className="">Код поставщика: G47</div>
          </div>
          <div className="border"></div>
          <div className="flex items-center my-2">
            <div className="flex flex-col mb-1 mr-4" x-data="{quantity: 1}">
              <p className="text-xs font-bold">Укажите количество:</p>
              <div className="flex">
                <button className="flex p-1 justify-center items-center border rounded-l-lg focus:outline-none hover:text-gray-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>{' '}
                <input
                  className="item_quantity w-12 border text-center p-1 focus:outline-none"
                  type="text"
                />{' '}
                <button className="border flex p-1 justify-center items-center rounded-r-lg focus:outline-none hover:text-gray-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap my-2">
            <button
              className="item_add border-2 border-blue-600 hover:border-blue-700 shadow hover:shadow-lg duration-500 flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded"
              id="s1"
            >
              В корзину
            </button>{' '}
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-600 ml-4">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>
          <div className="border"></div>
          <div className="flex my-2">
            <div className="flex items-center text-gray-600">Поделиться</div>
            <div className="flex py-2 ml-3 pl-1 border-l-2">
              <a className="text-gray-600">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>{' '}
              </a>
              <a className="ml-2 text-gray-600">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>{' '}
              </a>
              <a className="ml-2 text-gray-600">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* <Description/> */}
      </div>
      {/* <TabsPanel/> */}
      {/* Акции */}
      {/* Новинки */}
    </div>
  )
}

export { ProductPage }
