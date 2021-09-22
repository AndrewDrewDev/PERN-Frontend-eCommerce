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
        id: '0115-0101-00001',
        name: 'Название товара',
        label: '@',
        d735_exProductDiscounts: '',
        price: '310.00',
        inStock: 'да',
        oldPrice: '400.00',
        image:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        id: '0115-0101-00002',
        name: 'Название товара',
        label: '',
        d735_exProductDiscounts: '@',
        price: '310.00',
        inStock: 'да',
        oldPrice: '',
        image:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        id: '0115-0101-00003',
        name: 'Название товара',
        label: '@',
        d735_exProductDiscounts: '',
        price: '310.00',
        inStock: 'да',
        oldPrice: '400.00',
        image:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        id: '0115-0101-00004',
        name: 'Название товара',
        label: '',
        d735_exProductDiscounts: '@',
        price: '310.00',
        inStock: 'да',
        oldPrice: '',
        image:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        id: '0115-0101-00005',
        name: 'Название товара',
        label: '@',
        d735_exProductDiscounts: '',
        price: '310.00',
        inStock: 'да',
        oldPrice: '400.00',
        image:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        id: '0115-0101-00006',
        name: 'Название товара',
        label: '',
        d735_exProductDiscounts: '@',
        price: '310.00',
        inStock: 'да',
        oldPrice: '',
        image:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        id: '0115-0101-00007',
        name: 'Название товара',
        label: '@',
        d735_exProductDiscounts: '',
        price: '310.00',
        inStock: 'да',
        oldPrice: '400.00',
        image:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        id: '0115-0101-00008',
        name: 'Название товара',
        label: '',
        d735_exProductDiscounts: '@',
        price: '310.00',
        inStock: 'да',
        oldPrice: '',
        image:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
    ]

    this._newProducts = [
      {
        id: '0115-0101-00009',
        name: 'Название товара',
        label: '@',
        d735_exProductDiscounts: '',
        price: '310.00',
        inStock: 'да',
        oldPrice: '400.00',
        image:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        id: '0115-0101-00010',
        name: 'Название товара',
        label: '',
        d735_exProductDiscounts: '@',
        price: '310.00',
        inStock: 'да',
        oldPrice: '',
        image:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        id: '0115-0101-00011',
        name: 'Название товара',
        label: '@',
        d735_exProductDiscounts: '',
        price: '310.00',
        inStock: 'да',
        oldPrice: '400.00',
        image:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        id: '0115-0101-00012',
        name: 'Название товара',
        label: '',
        d735_exProductDiscounts: '@',
        price: '310.00',
        inStock: 'да',
        oldPrice: '',
        image:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        id: '0115-0101-00013',
        name: 'Название товара',
        label: '@',
        d735_exProductDiscounts: '',
        price: '310.00',
        inStock: 'да',
        oldPrice: '400.00',
        image:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        id: '0115-0101-00014',
        name: 'Название товара',
        label: '',
        d735_exProductDiscounts: '@',
        price: '310.00',
        inStock: 'да',
        oldPrice: '',
        image:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        id: '0115-0101-00015',
        name: 'Название товара',
        label: '@',
        d735_exProductDiscounts: '',
        price: '310.00',
        inStock: 'да',
        oldPrice: '400.00',
        image:
          'https://siteup.com.ua/demo/msk/tupperware/img-product/A03-0m.jpg',
      },
      {
        id: '0115-0101-00016',
        name: 'Название товара',
        label: '',
        d735_exProductDiscounts: '@',
        price: '310.00',
        inStock: 'да',
        oldPrice: '',
        image:
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
