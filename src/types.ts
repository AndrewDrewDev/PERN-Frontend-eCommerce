import { Dispatch, FC, SetStateAction } from 'react'

export type TRoutes = {
  path: string
  component: FC
}

export type TPageData = {
  id: string
  title: string
  content: string
  imgUrlFloatLeftTop?: string
  imgUrlFloatRightTop?: string // TODO: Add
  imgUrlWidthFullTop?: string // TODO: Add
  imgUrlWidthFullBottom?: string
}

export type TMainSliderData = {
  url: string
  title: string
}

export type TAddItemCartStore = {
  id: string
  name: string
  price: string
  img: string
}

export type IShopConfigStore = {
  shopConfig: ShopConfigType
}

export type ShopConfigType = {
  d582_exShopSiteTitle: string
  d583_exShopSiteSubTitle: string
  d580_exShopSiteID: string
  d581_exShopSiteBaseLink: string
  d584_exShopSiteAddress: string
  d585_exShopSitePhone: string
  d586_exShopSiteEmail: string
  d587_exShopSitePaginationNumber: string
  d589_exShopSiteCurrency: string
  d588_exShopSiteCatalogPage: string
  d590_exShopSiteCategoryNumber: string
  d593_exShopSiteTheme: string
  d591_exShopSiteCopyright: string
  d594_exShopSiteSocialNetwork: string
  d595_exShopSiteCategoryCloudNumber: string
  d601_exShopSiteCardView: string
  d602_exShopSiteGridView: string
  d603_exShopSiteDetailView: string
  d691_exCategory1: string
  d692_exCategory2: string
  d693_exCategory3: string
  d592_exShopSiteSliderHeader: string
  d599_exShopSiteDiscountCards: string
  d600_exShopSiteNewCards: string
}

export type TImgUrlProductData = {
  preview: string
  other: string[]
}

export type TProductPageDataStatus = 'да' | 'нет' | 'подзаказ'

export type TProductPageData = {
  categories: {
    name: string
    url: string
  }[]
  images: {
    preview: string
    big: string[]
  }
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
}

export type TCSInfoByUrlData = {
  name: string
  url: string
  count: string
}

export type TCSInfoByUrl = {
  [key: string]: TCSInfoByUrlData
}
