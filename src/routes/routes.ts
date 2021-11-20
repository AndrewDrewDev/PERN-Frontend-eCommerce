import { AuthPage } from '../pages/AuthPage'
import { InfoPage } from '../pages/InfoPage'
import { MainPage } from '../pages/MainPage'
import { PaymentPage } from '../pages/PaymentPage'
import { ProductPage } from '../pages/ProductPage'
import { TRoutes } from '../types'
import { CategoryPage } from '../pages/CategoryPage'
import { CatalogPage } from '../pages/CatalogPage'

export const LOGIN_ROUTE: string = '/login'
export const REGISTRATION_ROUTE: string = '/registration'
export const PRODUCT_ROUTE: string = '/product'
export const CATEGORY_ROUTE: string = '/category'
export const CATALOG_ROUTE: string = '/catalog'
export const CUSTOM_CATEGORY_ROUTE: string = '/label'
export const ALL_CATEGORY_ROUTE: string = '/category/all'
export const PAYMENT_ROUTE: string = '/payment'
export const INFO_ROUTE: string = '/info'
export const MAIN_ROUTE: string = '/'

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
    path: CATALOG_ROUTE,
    component: CatalogPage,
  },
  {
    path: CATEGORY_ROUTE + '/:id',
    component: CategoryPage,
  },
  {
    path: CUSTOM_CATEGORY_ROUTE + '/:id',
    component: CategoryPage,
  },
  {
    path: ALL_CATEGORY_ROUTE,
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
