import { FC, ReactElement, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CategoryProductList } from '../component/Categoty/CategoryProductList/CategoryProductList'
import { Breadcrumb } from '../component/Product/Breadcrumb'
import { TProductPageData } from '../types'
import { ProductSlider } from '../component/Product/ProductSlider'
import ProductInfo from '../component/Product/ProductInfo'
import { TabsPanel } from '../component/Product/TabsPanel'
import ProductApi from '../http/ProductApi'
import ContentLoadingSpinner from '../component/Loaders/ContentLoadingSpinner/ContentLoadingSpinner'
import { PageNotFound } from '../pages/PageNotFound'
import { categoriesPageStore } from '../store/CategoryStore'
import { CloudTags } from '../component/CloudTags/CloudTags'
import { observer } from 'mobx-react-lite'
import { modalStateStore } from '../store/ModalStateStore'
import { AdminEditButton } from '../component/Admin/button/AdminEditButton'
import { animated, useTransition } from 'react-spring'
import { scrollToBeginPage } from '../utils/scrollToBeginPage'

const ProductPage: FC = observer((): ReactElement => {
  const { id }: { id: string } = useParams()
  const [product, setProduct] = useState<TProductPageData | null | undefined>(
    undefined
  )
  const transition = useTransition(product, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
    reset: true,
  })

  useEffect(() => {
    scrollToBeginPage()
    setProduct(undefined)
    ProductApi.fetchOneProduct(id).then(data => setProduct(data))
  }, [id, modalStateStore.productEditModalState])

  if (product === undefined) return <ContentLoadingSpinner />
  if (product === null) return <PageNotFound title={'Продукт не найден'} />

  return (
    <>
      {transition((style, item) =>
        item ? (
          <animated.div style={style}>
            <h1 className="flex text-gray-700 text-3xl title-font font-medium mb-1">
              {product.name}
              <div className="ml-5">
                <AdminEditButton
                  onClickHandler={() =>
                    (modalStateStore.productEditModalState = {
                      isShowing: true,
                      productId: id,
                    })
                  }
                />
              </div>
            </h1>
            <Breadcrumb
              categories={product.categories}
              lastName={product.name}
            />
            <div className="mx-auto flex flex-wrap">
              <ProductSlider
                productName={product.name}
                images={product.images.big}
              />
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
            <CategoryProductList
              name={categoriesPageStore.infoById('Aktsii').name}
              count={categoriesPageStore.infoById('Aktsii').count}
              products={categoriesPageStore.categoryDiscountProducts}
              limit={4}
            />
            <CategoryProductList
              name={categoriesPageStore.infoById('Novinki').name}
              count={categoriesPageStore.infoById('Novinki').count}
              products={categoriesPageStore.categoryNewProducts}
              limit={4}
            />
            <CloudTags />
          </animated.div>
        ) : null
      )}
    </>
  )
})

export { ProductPage }
