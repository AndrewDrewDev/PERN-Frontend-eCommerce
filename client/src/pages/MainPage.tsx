import { CategoryWrapper } from "../component/user/common/CategoryWrapper"
import { CloudTags } from "../component/user/common/CloudTags"
import { MainSlider } from "../component/user/main/MainSlider"
import { mainPageStore } from "../store/MainPageStore"

const MainPage = () => {
  return (
    <div className="container mx-auto">
      <MainSlider />
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
      <CloudTags />
    </div>
  )
}

export { MainPage }
