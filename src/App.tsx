import { AppRouter } from './component/AppRouter'
import { Footer } from './component/Footer/Footer'
import { Header } from './component/Header/Header'
import { observer } from 'mobx-react-lite'
import { FC, ReactElement } from 'react'
import { shopConfigStore } from './store/ShopConfigStore'
import { BrowserRouter } from 'react-router-dom'
import { CommonModals } from './component/Modal/CommonModals'
import { categoriesPageStore } from './store/CategoryStore'
import { AppLoadingSpinner } from './component/Loaders/AppLoadingSpinner/AppLoadingSpinner'

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
