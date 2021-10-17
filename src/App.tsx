import { AppRouter } from './component/AppRouter'
import { Footer } from './component/user/footer/Footer'
import { Header } from './component/user/header/Header'
import { observer } from 'mobx-react-lite'
import { FC, ReactElement } from 'react'
import { shopConfigStore } from './store/ShopConfigStore'
import { BrowserRouter } from 'react-router-dom'
import { ProductSliderModal } from './component/user/modal/ProductSliderModal/ProductSliderModal'
import { ProductQuickViewModal } from './component/user/modal/ProductQuickViewModal'
import Spinner from './component/user/common/Spinner'

const App: FC = observer((): ReactElement => {
  return (
    <BrowserRouter>
      {shopConfigStore.config ? (
        <>
          <Header />
          <AppRouter />
          <Footer />
          <ProductSliderModal />
          <ProductQuickViewModal />
        </>
      ) : (
        <Spinner />
      )}
    </BrowserRouter>
  )
})

export default App
