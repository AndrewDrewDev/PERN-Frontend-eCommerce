import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './component/AppRouter'
import { Footer } from './component/user/Footer/Footer'
import { Header } from './component/user/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}

export default App
