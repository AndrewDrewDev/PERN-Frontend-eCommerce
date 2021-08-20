import { makeAutoObservable } from 'mobx'
import { TPageData } from '../types'

class InfoPagesStore {
  private _aboutData: TPageData
  private _deliverytData: TPageData
  private _faqsData: TPageData
  private _paymentData: TPageData
  private _publicOfferData: TPageData
  private _warrantyPageData: TPageData

  constructor() {
    this._aboutData = {
      id: 'about',
      title: 'О магазине',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias ex earum pariatur corporis, quo velit maiores eveniet molestiae enim veniam nemo molestias vitae neque doloribus maxime fugit placeat repudiandae! Similique autem minima illo, impedit dolor id veniam tempora nam officiis reiciendis nesciunt omnis pariatur facere voluptate? Consequatur, culpa cumque?',
      imgUrlFloatLeftTop:
        'https://siteup.com.ua/demo/msk/tupperware/page/about/img/about-1.jpg',
      imgUrlWidthFullBottom:
        'https://siteup.com.ua/demo/msk/tupperware/page/about/img/about-2.svg',
    }

    this._deliverytData = {
      id: 'delivery',
      title: 'Доставка',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias ex earum pariatur corporis, quo velit maiores eveniet molestiae enim veniam nemo molestias vitae neque doloribus maxime fugit placeat repudiandae! Similique autem minima illo, impedit dolor id veniam tempora nam officiis reiciendis nesciunt omnis pariatur facere voluptate? Consequatur, culpa cumque?',
    }

    this._faqsData = {
      id: 'faqs',
      title: 'Вопросы-Ответы',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias ex earum pariatur corporis, quo velit maiores eveniet molestiae enim veniam nemo molestias vitae neque doloribus maxime fugit placeat repudiandae! Similique autem minima illo, impedit dolor id veniam tempora nam officiis reiciendis nesciunt omnis pariatur facere voluptate? Consequatur, culpa cumque?',
    }

    this._paymentData = {
      id: 'payment',
      title: 'Оплата',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias ex earum pariatur corporis, quo velit maiores eveniet molestiae enim veniam nemo molestias vitae neque doloribus maxime fugit placeat repudiandae! Similique autem minima illo, impedit dolor id veniam tempora nam officiis reiciendis nesciunt omnis pariatur facere voluptate? Consequatur, culpa cumque?',
    }

    this._publicOfferData = {
      id: 'public-offer',
      title: 'Договор публичной аферты',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias ex earum pariatur corporis, quo velit maiores eveniet molestiae enim veniam nemo molestias vitae neque doloribus maxime fugit placeat repudiandae! Similique autem minima illo, impedit dolor id veniam tempora nam officiis reiciendis nesciunt omnis pariatur facere voluptate? Consequatur, culpa cumque?',
    }

    this._warrantyPageData = {
      id: 'warranty',
      title: 'Гарантия',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias ex earum pariatur corporis, quo velit maiores eveniet molestiae enim veniam nemo molestias vitae neque doloribus maxime fugit placeat repudiandae! Similique autem minima illo, impedit dolor id veniam tempora nam officiis reiciendis nesciunt omnis pariatur facere voluptate? Consequatur, culpa cumque?',
    }

    makeAutoObservable(this)
  }

  get aboutData() {
    return this._aboutData
  }
  get deliverytData() {
    return this._deliverytData
  }
  get faqsData() {
    return this._faqsData
  }
  get paymentData() {
    return this._paymentData
  }
  get publicOfferData() {
    return this._publicOfferData
  }
  get warrantyPageData() {
    return this._warrantyPageData
  }
}

const infoPagesStore = new InfoPagesStore()

export { infoPagesStore }
