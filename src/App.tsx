import { AppRouter } from './component/AppRouter'
import { Footer } from './component/user/footer/Footer'
import { Header } from './component/user/header/Header'
import { observer } from 'mobx-react-lite'
import { FC, ReactElement } from 'react'
import { shopConfigStore } from './store/ShopConfigStore'
import { BrowserRouter } from 'react-router-dom'
import { CommonModals } from './component/user/modal/CommonModals'
import { categoriesPageStore } from './store/CategoryStore'
import { AppLoadingSpinner } from './component/user/loaders/AppLoadingSpinner'

const App: FC = observer((): ReactElement => {
  return (
    <BrowserRouter>
      {shopConfigStore.isLoaded && categoriesPageStore.isLoaded ? (
        <>
          <Header />
          <AppRouter />
          <Footer />
          <CommonModals />
        </>
      ) : (
        <AppLoadingSpinner />
      )}
    </BrowserRouter>
  )
})

export default App
