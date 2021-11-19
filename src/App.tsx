import { AppRouter } from './component/AppRouter'
import { Index } from './component/Footer'
import { Header } from './component/Header'
import { observer } from 'mobx-react-lite'
import { FC, ReactElement } from 'react'
import { shopConfigStore } from './store/ShopConfigStore'
import { BrowserRouter } from 'react-router-dom'
import { CommonModals } from './component/Modal/CommonModals'
import { categoriesPageStore } from './store/CategoryStore'
import { AppLoadingSpinner } from './component/Loaders/AppLoadingSpinner'

const App: FC = observer((): ReactElement => {
  return (
    <BrowserRouter>
      {shopConfigStore.isLoaded && categoriesPageStore.isLoaded ? (
        <>
          <Header />
          <AppRouter />
          <Index />
          <CommonModals />
        </>
      ) : (
        <AppLoadingSpinner />
      )}
    </BrowserRouter>
  )
})

export default App
