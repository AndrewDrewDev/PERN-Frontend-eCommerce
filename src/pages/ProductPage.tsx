import { FC, ReactElement, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CategoryWrapper } from '../component/user/common/CategoryWrapper'
import { Breadcrumb } from '../component/user/product/Breadcrumb'
import { TProductPageData } from '../types'
import { ProductSlider } from '../component/user/product/ProductSlider'
import ProductInfo from '../component/user/product/ProductInfo'
import { TabsPanel } from '../component/user/product/TabsPanel'
import ProductApi from '../http/ProductApi'
import Spinner from '../component/user/common/Spinner'
import { PageNotFound } from '../pages/PageNotFound'
import { categoriesPageStore } from '../store/CategoryStore'
import { CloudTags } from '../component/user/common/CloudTags'
import { observer } from 'mobx-react-lite'
import { modalStateStore } from '../store/ModalStateStore'
import { AdminEditBotton } from '../component/admin/button/AdminEditBotton'

const ProductPage: FC = observer((): ReactElement => {
  const { id }: { id: string } = useParams()

  const [product, setProduct] = useState<TProductPageData | null | undefined>(
    undefined
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    ProductApi.fetchOneProduct(id).then(data => setProduct(data))
  }, [id, modalStateStore.productEditModalState])

  if (product === undefined) return <Spinner />
  if (product === null) return <PageNotFound title={'Продукт не найден'} />

  return (
    <>
      <h1 className="flex text-gray-700 text-3xl title-font font-medium mb-1">
        {product.name}
        <div className="ml-5">
          <AdminEditBotton
            onClickHandler={() =>
              (modalStateStore.productEditModalState = {
                isShowing: true,
                productId: id,
              })
            }
          />
        </div>
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
        name={categoriesPageStore.infoById('Aktsii').name}
        count={categoriesPageStore.infoById('Aktsii').count}
        products={categoriesPageStore.categoryDiscountProducts}
        limit={4}
      />
      <CategoryWrapper
        name={categoriesPageStore.infoById('Novinki').name}
        count={categoriesPageStore.infoById('Novinki').count}
        products={categoriesPageStore.categoryNewProducts}
        limit={4}
      />
      <CloudTags />
    </>
  )
})

export { ProductPage }
