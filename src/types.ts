import { Dispatch, FC, SetStateAction } from 'react'

export type TRoutes = {
  path: string
  component: FC
}

export type TPageData = {
  title: string
  content: string
  img: string[] | null
}

export type TAddItemCartStore = {
  id: string
  name: string
  price: string
  img: string
  count?: number
}

export type TShopConfig = {
  title: string
  sub_title: string
  id: string
  base_link: string
  address: string
  phone: string
  email: string
  pagination_number: string
  currency: string
  catalog_page: string
  category_number: string
  copyright: string
  social_network: string
  category_cloud_number: string
  card_view: string
  site_grid_view: string
  site_detail_view: string
}

export type TImgUrlProductData = {
  preview: string
  other: string[]
}

export type TProductPageDataStatus = 'да' | 'нет' | 'подзаказ'

export type TProductPageDataImages = {
  preview: string
  big: string[]
}
export type TLabelCategoryNames = 'Акции' | 'Новинки'
export type TProductPageData = {
  categories: {
    name: string
    url: string
  }[]
  images: TProductPageDataImages
  name: string
  label: TLabelCategoryNames
  unit: string
  supplier: string
  id: string
  vendor_id: string
  description: string
  price: string
  old_price: string
  amount: string
  status: TProductPageDataStatus
}

export type TItemsCartStore = {
  id: string
  name: string
  price: string
  priceAll: string
  img: string
  count: number
}

export type TMainProductsData = {
  id: string
  name: string
  label: TLabelCategoryNames
  price: string
  old_price: string
  img: string
}

export type TCategoryInfoByLevel = {
  count: string
  name: string
  url: string
  img: string | null
}

export type TCSInfoByUrlData = {
  name: string
  url: string
  count: string
}

export type TCSInfoByUrl = {
  [key: string]: TCSInfoByUrlData
}

export type TInfoPagesData = {
  name: string
  url: string
  content: string
  img: string[] | null
}

export type TShopSlider = {
  title: string
  img: string
}

export type TPaymentCheckoutOrderData = {
  orderId: string
  finalCount: string
  finalTotal: string
  products: TItemsCartStore[]
  fullName: string
  type: 'quick' | 'common'
  email: string
  phone: string
  address: string
  comment: string
}

export type TProductSearchByNameResult = {
  name: string
  id: string
  price: string
  img: string
}

export type TUserAccountData = {
  email: string
  role: 'USER' | 'ADMIN'
}

export type TShopCustomCategoryProducts = {
  category_name: string
  category_url: string
  name: string
  id: string
  img: string
}[]

export type TUpdateCustomCategoryProductsBody = { data: string }

export interface IModalWrapper {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

export type TResponseMessage = {
  code?: number
  status: 'OK' | 'FAILED'
  message?: string
}
