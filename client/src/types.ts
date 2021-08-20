import { Dispatch, FC, SetStateAction } from 'react'

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

export type Td691_exCategory1 = string
export type Td692_exCategory2 = string
export type Td693_exCategory3 = string
export type Td691_exCategory1EN = string
export type Td692_exCategory2EN = string
export type Td693_exCategory3EN = string
export type Td720_exProductID = string
export type Td721_exProductName = string
export type Td734_exProductNew = '@' | ''
export type Td735_exProductDiscounts = '@' | ''
export type Td802_exPriceSell = string
export type Td781_exEd = string
export type Td723_exProductDescription = string
export type Td748_exProductAmountRemaind = string
export type Td722_exProductInStock = '+' | '-' | '?' | ''
export type Td747_exProductCodeVender = string
export type Td803_exPriceOldSell = string
export type Td738_exProductManufacturer = string

export type TFullProductData = {
  d691_exCategory1: Td691_exCategory1
  d692_exCategory2: Td692_exCategory2
  d693_exCategory3: Td693_exCategory3
  d691_exCategory1EN: Td691_exCategory1EN
  d692_exCategory2EN: Td692_exCategory2EN
  d693_exCategory3EN: Td693_exCategory3EN
  d720_exProductID: Td720_exProductID
  d721_exProductName: Td721_exProductName
  d734_exProductNew: Td734_exProductNew
  d735_exProductDiscounts: Td735_exProductDiscounts
  d802_exPriceSell: Td802_exPriceSell
  d781_exEd: Td781_exEd
  d723_exProductDescription: Td723_exProductDescription
  d748_exProductAmountRemaind: Td748_exProductAmountRemaind
  d722_exProductInStock: Td722_exProductInStock
  d747_exProductCodeVender: Td747_exProductCodeVender
  d803_exPriceOldSell: Td803_exPriceOldSell
  d738_exProductManufacturer: Td738_exProductManufacturer
  REST_imgUrl: TImgUrlProductData
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
