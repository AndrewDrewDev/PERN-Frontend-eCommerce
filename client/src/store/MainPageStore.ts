import { makeAutoObservable } from 'mobx'

export type TMainSliderData = {
  url: string
  title: string
}

export type TMainProductsData = {
  d720_exProductID: string,
  d721_exProductName: string,
  d734_exProductNew: string,
  d735_exProductDiscounts: string,
  d802_exPriceSell: string,
  d722_exProductInStock: string,
  d803_exPriceOldSell: string,
  REST_img: string
}

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
        d720_exProductID: '0115-0101-00016',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '@',
        d735_exProductDiscounts: '',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '400.00',
        REST_img: 'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg'
      },
      {
        d720_exProductID: '0115-0101-00016',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '',
        d735_exProductDiscounts: '@',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '',
        REST_img: 'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg'
      },
      {
        d720_exProductID: '0115-0101-00016',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '@',
        d735_exProductDiscounts: '',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '400.00',
        REST_img: 'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg'
      },
      {
        d720_exProductID: '0115-0101-00016',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '',
        d735_exProductDiscounts: '@',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '',
        REST_img: 'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg'
      },
      {
        d720_exProductID: '0115-0101-00016',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '@',
        d735_exProductDiscounts: '',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '400.00',
        REST_img: 'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg'
      },
      {
        d720_exProductID: '0115-0101-00016',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '',
        d735_exProductDiscounts: '@',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '',
        REST_img: 'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg'
      },
      {
        d720_exProductID: '0115-0101-00016',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '@',
        d735_exProductDiscounts: '',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '400.00',
        REST_img: 'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg'
      },
      {
        d720_exProductID: '0115-0101-00016',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '',
        d735_exProductDiscounts: '@',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '',
        REST_img: 'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg'
      }
    ]

    this._newProducts = [
      {
        d720_exProductID: '0115-0101-00016',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '@',
        d735_exProductDiscounts: '',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '400.00',
        REST_img: 'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg'
      },
      {
        d720_exProductID: '0115-0101-00016',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '',
        d735_exProductDiscounts: '@',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '',
        REST_img: 'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg'
      },
      {
        d720_exProductID: '0115-0101-00016',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '@',
        d735_exProductDiscounts: '',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '400.00',
        REST_img: 'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg'
      },
      {
        d720_exProductID: '0115-0101-00016',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '',
        d735_exProductDiscounts: '@',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '',
        REST_img: 'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg'
      },
      {
        d720_exProductID: '0115-0101-00016',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '@',
        d735_exProductDiscounts: '',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '400.00',
        REST_img: 'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg'
      },
      {
        d720_exProductID: '0115-0101-00016',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '',
        d735_exProductDiscounts: '@',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '',
        REST_img: 'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg'
      },
      {
        d720_exProductID: '0115-0101-00016',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '@',
        d735_exProductDiscounts: '',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '400.00',
        REST_img: 'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg'
      },
      {
        d720_exProductID: '0115-0101-00016',
        d721_exProductName: 'Название товара',
        d734_exProductNew: '',
        d735_exProductDiscounts: '@',
        d802_exPriceSell: '310.00',
        d722_exProductInStock: 'да',
        d803_exPriceOldSell: '',
        REST_img: 'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg'
      }
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
