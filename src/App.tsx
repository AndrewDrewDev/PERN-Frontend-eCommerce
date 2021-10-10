import { AppRouter } from './component/AppRouter'
import { Footer } from './component/user/footer/Footer'
import { Header } from './component/user/header/Header'
import { observer } from 'mobx-react-lite'
import { FC, ReactElement } from 'react'
import { shopConfigStore } from './store/ShopConfigStore'
import { BrowserRouter } from 'react-router-dom'
import { ProductSliderWidget } from './component/user/common/ProductSliderWidget'

const App: FC = observer((): ReactElement => {
  return (
    <BrowserRouter>
      {shopConfigStore.config ? (
        <>
          <Header />
          <AppRouter />
          <Footer />
          <ProductSliderWidget />
        </>
      ) : null}
    </BrowserRouter>
  )
})

export default App
