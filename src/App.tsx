import { AppRouter } from './component/AppRouter'
import { Footer } from './component/user/footer/Footer'
import { Header } from './component/user/header/Header'
import { observer } from 'mobx-react-lite'
import { FC, ReactElement } from 'react'
import { shopConfigStore } from './store/ShopConfigStore'
import { BrowserRouter } from 'react-router-dom'
import Spinner from './component/user/common/Spinner'
import { CommonModals } from './component/user/modal/CommonModals'

const App: FC = observer((): ReactElement => {
  return (
    <BrowserRouter>
      {shopConfigStore.config ? (
        <>
          <Header />
          <AppRouter />
          <Footer />
          <CommonModals />
        </>
      ) : (
        <Spinner />
      )}
    </BrowserRouter>
  )
})

export default App
