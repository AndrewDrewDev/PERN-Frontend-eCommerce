import { FC } from 'react'
import { AdminPage } from './pages/AdminPage'
import { AuthPage } from './pages/AuthPage'
import { InfoPage } from './pages/InfoPage'
import { MainPage } from './pages/MainPage'
import { PaymentPage } from './pages/PaymentPage'
import { ProductPage } from './pages/ProductPage'
import {
  ADMIN_ROUTE,
  INFO_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  PAYMENT_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
} from './utils/consts'

export type RoutesType = {
  path: string
  component: FC
}

export const authRoutes: RoutesType[] = [
  {
    path: ADMIN_ROUTE,
    component: AdminPage,
  },
]

export const publicRoutes: RoutesType[] = [
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
  }
]
