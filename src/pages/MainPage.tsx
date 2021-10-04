import { FC, ReactElement, useEffect, useState } from 'react'
import { CategoryWrapper } from '../component/user/common/CategoryWrapper'
import { CloudTags } from '../component/user/common/CloudTags'
import { MainSlider } from '../component/user/main/MainSlider'
import { categoriesPageStore } from '../store/CategoryStore'
import { observer } from 'mobx-react-lite'
import { TCategoryInfoByLevel, TCSInfoByUrlData } from '../types'

const MainPage: FC = observer((): ReactElement => {
  return (
    <div className="container mx-auto">
      <MainSlider />
      <CategoryWrapper
        name={categoriesPageStore.infoByUrl('Aktsii').name}
        count={categoriesPageStore.infoByUrl('Aktsii').count}
        products={categoriesPageStore.categoryDiscountProducts}
        limit={8}
      />
      <CategoryWrapper
        name={categoriesPageStore.infoByUrl('Novinki').name}
        count={categoriesPageStore.infoByUrl('Novinki').count}
        products={categoriesPageStore.categoryNewProducts}
        limit={8}
      />
      <CloudTags />
    </div>
  )
})

export { MainPage }
