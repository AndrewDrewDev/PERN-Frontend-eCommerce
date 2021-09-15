import { FC, ReactElement, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CategoryWrapper } from '../component/user/common/CategoryWrapper'
import { Breadcrumb } from '../component/user/product/Breadcrumb'
import { mainPageStore } from '../store/MainPageStore'
import { TProductPageData } from '../types'
import { ProductSlider } from '../component/user/product/ProductSlider'
import ProductInfo from '../component/user/product/ProductInfo'
import { TabsPanel } from '../component/user/product/TabsPanel'
import ProductApi from '../http/ProductApi'

const ProductPage: FC = (): ReactElement => {
  const [product, setProduct] = useState<TProductPageData | undefined>()
  const { id }: { id: string } = useParams()

  useEffect(() => {
    ProductApi.fetchOneProduct(id).then(data => setProduct(data))
  }, [])

  // TODO Add product page content not fount
  if (!product) return <div>TODO Add product page content not fount</div>

  return (
    <div className="container mx-auto">
      <h1 className="text-gray-700 text-3xl title-font font-medium mb-1">
        {product.name}
      </h1>
      <Breadcrumb categories={product.categories} lastName={product.name} />
      <div className="mx-auto flex flex-wrap">
        <ProductSlider images={product.images.big} />
        <ProductInfo data={product} />
      </div>
      <TabsPanel
        description={product.description}
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
