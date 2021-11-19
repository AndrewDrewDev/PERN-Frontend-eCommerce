import { FC, ReactElement } from 'react'
import { CategoryProductList } from '../component/Categoty/CategoryProductList'
import { CloudTags } from '../component/CloudTags'
import { MainSlider } from '../component/Main/MainSlider'
import { categoriesPageStore } from '../store/CategoryStore'
import { observer } from 'mobx-react-lite'

const MainPage: FC = observer((): ReactElement => {
  return (
    <>
      <MainSlider />
      {categoriesPageStore.infoById('Aktsii') ? (
        <CategoryProductList
          name={categoriesPageStore.infoById('Aktsii').name}
          count={categoriesPageStore.infoById('Aktsii').count}
          products={categoriesPageStore.categoryDiscountProducts}
          limit={8}
        />
      ) : null}
      {categoriesPageStore.infoById('Novinki') ? (
        <CategoryProductList
          name={categoriesPageStore.infoById('Novinki').name}
          count={categoriesPageStore.infoById('Novinki').count}
          products={categoriesPageStore.categoryNewProducts}
          limit={8}
        />
      ) : null}
      <CloudTags />
    </>
  )
})

export { MainPage }
