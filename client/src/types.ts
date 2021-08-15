import { FC } from 'react'

export type TRoutes = {
  path: string
  component: FC
}

export type TCategoryData = {
  name: string
  id: string
  count: number
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

export type TMainProductsData = {
  d720_exProductID: string
  d721_exProductName: string
  d734_exProductNew: string
  d735_exProductDiscounts: string
  d802_exPriceSell: string
  d722_exProductInStock: string
  d803_exPriceOldSell: string
  REST_img: string
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

export type TFullProductData = {
  d691_exCategory1: string
  d692_exCategory2: string
  d693_exCategory3: string
  d691_exCategory1EN: string
  d692_exCategory2EN: string
  d693_exCategory3EN: string
  d720_exProductID: string
  d721_exProductName: string
  d734_exProductNew: string
  d735_exProductDiscounts: string
  d802_exPriceSell: string
  d781_exEd: string
  d723_exProductDescription: string
  d748_exProductAmountRemaind: string
  d722_exProductInStock: string
  d747_exProductCodeVender: string
  d803_exPriceOldSell: string
  d738_exProductManufacturer: string
  REST_imgUrl: TImgUrlProductData
}
