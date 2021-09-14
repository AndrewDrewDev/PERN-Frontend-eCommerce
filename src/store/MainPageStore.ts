import { makeAutoObservable } from 'mobx'
import { TMainProductsData, TMainSliderData } from '../types'

class MainPageStore {
  private _sliderData: TMainSliderData[]
  private _newProducts: TMainProductsData[]
  private _discountProducts: TMainProductsData[]

  constructor() {
    this._sliderData = [
      {
        url: 'https://siteup.com.ua/demo/msk/tupperware/main/slider/slide-1.jpg',
        title: 'title1 fdadfds fadsf dsaf dsafdas fasd fsadf asdf',
      },
      {
        url: 'https://siteup.com.ua/demo/msk/tupperware/main/slider/slide-2.jpg',
        title: 'title2',
      },
      {
        url: 'https://siteup.com.ua/demo/msk/tupperware/main/slider/slide-3.jpg',
        title: 'title3',
      },
      {
        url: 'https://siteup.com.ua/demo/msk/tupperware/main/slider/slide-4.jpg',
        title: 'title4',
      },
      {
        url: 'https://siteup.com.ua/demo/msk/tupperware/main/slider/slide-5.jpg',
        title: 'title5',
      },
      {
        url: 'https://siteup.com.ua/demo/msk/tupperware/main/slider/slide-6.jpg',
        title: 'title6',
      },
      {
        url: 'https://siteup.com.ua/demo/msk/tupperware/main/slider/slide-7.jpg',
        title: 'title7',
      },
    ]

    this._discountProducts = [
      {
        d720_exProductID: '0115-0101-00001',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '@',
        d735_exProductDiscounts: '',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '400.00',
        REST_img:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        d720_exProductID: '0115-0101-00002',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '',
        d735_exProductDiscounts: '@',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '',
        REST_img:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        d720_exProductID: '0115-0101-00003',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '@',
        d735_exProductDiscounts: '',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '400.00',
        REST_img:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        d720_exProductID: '0115-0101-00004',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '',
        d735_exProductDiscounts: '@',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '',
        REST_img:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        d720_exProductID: '0115-0101-00005',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '@',
        d735_exProductDiscounts: '',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '400.00',
        REST_img:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        d720_exProductID: '0115-0101-00006',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '',
        d735_exProductDiscounts: '@',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '',
        REST_img:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        d720_exProductID: '0115-0101-00007',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '@',
        d735_exProductDiscounts: '',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '400.00',
        REST_img:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        d720_exProductID: '0115-0101-00008',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '',
        d735_exProductDiscounts: '@',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '',
        REST_img:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
    ]

    this._newProducts = [
      {
        d720_exProductID: '0115-0101-00009',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '@',
        d735_exProductDiscounts: '',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '400.00',
        REST_img:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        d720_exProductID: '0115-0101-00010',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '',
        d735_exProductDiscounts: '@',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '',
        REST_img:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        d720_exProductID: '0115-0101-00011',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '@',
        d735_exProductDiscounts: '',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '400.00',
        REST_img:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        d720_exProductID: '0115-0101-00012',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '',
        d735_exProductDiscounts: '@',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '',
        REST_img:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        d720_exProductID: '0115-0101-00013',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '@',
        d735_exProductDiscounts: '',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '400.00',
        REST_img:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        d720_exProductID: '0115-0101-00014',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '',
        d735_exProductDiscounts: '@',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '',
        REST_img:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        d720_exProductID: '0115-0101-00015',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '@',
        d735_exProductDiscounts: '',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '400.00',
        REST_img:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        d720_exProductID: '0115-0101-00016',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '',
        d735_exProductDiscounts: '@',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '',
        REST_img:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
    ]

    makeAutoObservable(this)
  }

  get sliderData() {
    return this._sliderData
  }

  get newProducts() {
    return this._newProducts
  }

  get discountProducts() {
    return this._discountProducts
  }
}

const mainPageStore = new MainPageStore()

export { mainPageStore }