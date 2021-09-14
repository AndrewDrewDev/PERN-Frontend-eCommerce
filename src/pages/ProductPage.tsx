import { FC, ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import { CategoryWrapper } from '../component/user/common/CategoryWrapper'
import { Breadcrumb } from '../component/user/product/Breadcrumb'
import { mainPageStore } from '../store/MainPageStore'
import { TProductPageData } from '../types'
import { ProductSlider } from '../component/user/product/ProductSlider'
import ProductInfo from '../component/user/product/ProductInfo'
import { TabsPanel } from '../component/user/product/TabsPanel'

const ProductPage: FC = (): ReactElement => {
  const { id }: { id: string } = useParams()

  const data: TProductPageData = JSON.parse(`{
    "categories": [
        {
            "name": "Классика",
            "url": "Klassika"
        },
        {
            "name": "Классика «Tupperware»",
            "url": "Klassika-«Tupperware»"
        },
        {
            "name": "Контейнеры",
            "url": "Konteinery"
        }
    ],
    "images": {
        "preview": "1ba81a9b-eb74-48db-8419-3718352baf40.jpg",
        "big": [
            "827f0c8a-4bde-40b8-9d4b-3c8ea07e9229.jpg",
            "281c8a4a-fb45-461e-bfa8-833c212b69e5.jpg"
        ]
    },
    "name": "Контейнер «Свежесть» (5,5 л)",
    "label": "Акции",
    "unit": "шт.",
    "supplier": "Tupperware",
    "id": "A03",
    "vendorId": "G47",
    "description": "**Преимущества**: \\n\\n- Открывающаяся вверх, скошенная часть крышки имеет небольшие отверстия, обеспечивающие циркуляцию воздуха в контейнере, что позволяет хранить продукты максимально долгое время.\\n- Непрозрачная поверхность защищает продукт от воздействия солнечных лучей.\\n- Легко разбирать и собирать.\\n- На подвижной части крышки располагается фиксатор, который предотвращает ее случайное открытие.\\n- Легкий доступ к содержимому – достаточно открыть подвижную часть крышки с отверстиями.\\nВозможности использования:\\nКонтейнер «Свежесть» предназначен для хранения картофеля, моркови, свеклы и других овощей и фруктов.",
    "price": "2699.44",
    "oldPrice": "2969.00",
    "amount": 80,
    "status": "да"
}`)

  return (
    <div className="container mx-auto">
      <h1 className="text-gray-700 text-3xl title-font font-medium mb-1">
        {data.name}
      </h1>
      <Breadcrumb categories={data.categories} lastName={data.name} />
      <div className="mx-auto flex flex-wrap">
        <ProductSlider images={data.images.big} />
        <ProductInfo data={data} />
      </div>
      <TabsPanel
        description={data.description}
        info={
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, fugit aliquid assumenda exercitationem doloremque vitae tempore tempora ex sequi! Eos soluta praesentium error neque nesciunt consectetur voluptates quidem. Fuga, laboriosam.'
        }
        paymentDelivery={
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, fugit aliquid assumenda exercitationem doloremque vitae tempore tempora ex sequi! Eos soluta praesentium error neque nesciunt consectetur voluptates quidem. Fuga, laboriosam.'
        }
        reviews={
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, fugit aliquid assumenda exercitationem doloremque vitae tempore tempora ex sequi! Eos soluta praesentium error neque nesciunt consectetur voluptates quidem. Fuga, laboriosam.'
        }
      />
      <CategoryWrapper
        name={'Акции'}
        count={4}
        products={mainPageStore.discountProducts}
      />
      <CategoryWrapper
        name={'Новинки'}
        count={4}
        products={mainPageStore.newProducts}
      />
    </div>
  )
}

export { ProductPage }
