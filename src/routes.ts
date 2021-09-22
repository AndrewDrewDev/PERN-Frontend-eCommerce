import { AdminPage } from './pages/AdminPage'
import { AuthPage } from './pages/AuthPage'
import { InfoPage } from './pages/InfoPage'
import { MainPage } from './pages/MainPage'
import { PaymentPage } from './pages/PaymentPage'
import { ProductPage } from './pages/ProductPage'
import { TRoutes } from './types'
import { CategoryPage } from './pages/CategoryPage'

export const ADMIN_ROUTE: string = '/admin'
export const LOGIN_ROUTE: string = '/login'
export const REGISTRATION_ROUTE: string = '/registration'
export const PRODUCT_ROUTE: string = '/product'
export const CATEGORY_ROUTE: string = '/category'
export const PAYMENT_ROUTE: string = '/payment'
export const INFO_ROUTE: string = '/info'
export const MAIN_ROUTE: string = '/'

export const authRoutes: TRoutes[] = [
  {
    path: ADMIN_ROUTE,
    component: AdminPage,
  },
]

export const publicRoutes: TRoutes[] = [
  {
    path: LOGIN_ROUTE,
    component: AuthPage,
  },
  {
    path: REGISTRATION_ROUTE,
    component: AuthPage,
  },
  {
    path: PRODUCT_ROUTE + '/:id',
    component: ProductPage,
  },
  {
    path: CATEGORY_ROUTE + '/:id',
    component: CategoryPage,
  },
  {
    path: PAYMENT_ROUTE,
    component: PaymentPage,
  },
  {
    path: INFO_ROUTE + '/:id',
    component: InfoPage,
  },
  {
    path: MAIN_ROUTE,
    component: MainPage,
  },
]
