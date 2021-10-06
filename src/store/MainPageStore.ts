import { makeAutoObservable } from 'mobx'
import { TMainSliderData } from '../types'

class MainPageStore {
  private _sliderData: TMainSliderData[]

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

    makeAutoObservable(this)
  }

  get sliderData() {
    return this._sliderData
  }
}

const mainPageStore = new MainPageStore()

export { mainPageStore }
