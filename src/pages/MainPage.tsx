import { FC, ReactElement } from 'react'
import { CategoryWrapper } from '../component/user/common/CategoryWrapper'
import { CloudTags } from '../component/user/common/CloudTags'
import { MainSlider } from '../component/user/main/MainSlider'
import { categoriesPageStore } from '../store/CategoryStore'
import { observer } from 'mobx-react-lite'

const MainPage: FC = observer((): ReactElement => {
  return (
    <>
      <MainSlider />
      {categoriesPageStore.infoById('Aktsii') ? (
        <CategoryWrapper
          name={categoriesPageStore.infoById('Aktsii').name}
          count={categoriesPageStore.infoById('Aktsii').count}
          products={categoriesPageStore.categoryDiscountProducts}
          limit={8}
        />
      ) : null}
      {categoriesPageStore.infoById('Novinki') ? (
        <CategoryWrapper
          name={categoriesPageStore.infoById('Novinki').name}
          count={categoriesPageStore.infoById('Novinki').count}
          products={categoriesPageStore.categoryDiscountProducts}
          limit={8}
        />
      ) : null}
      <CloudTags />
    </>
  )
})

export { MainPage }
