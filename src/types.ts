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

export type TProductPageData = {
  categories: {
    name: string
    url: string
  }[]
  images: TProductPageDataImages
  name: string
  label: 'Акции' | 'Новинки'
  unit: string
  supplier: string
  id: string
  vendorId: string
  description: string
  price: string
  oldPrice: string
  amount: number
  status: TProductPageDataStatus
}

export type TShowHideComponent = {
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

export type TItemsCartStore = {
  id: string
  name: string
  price: string
  priceAll: string
  img: string
  count: number
}

export type TMainProductsDataLable = 'Новинки' | 'Акции'
export type TMainProductsData = {
  id: string
  name: string
  label: TMainProductsDataLable
  price: string
  oldprice: string
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
