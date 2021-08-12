import { CategoryWrapper } from "../component/user/common/CategoryWrapper"
import { MainSlider } from "../component/user/main/MainSlider"

const MainPage = () => {
  
  return (
    <div className="container mx-auto">
      <MainSlider />
      {/* <CategoryWrapper 
        name={'fsdf'}
        count={4}
        goods={['111','222','333']}
      /> */}
    </div>
  )
}

export { MainPage }