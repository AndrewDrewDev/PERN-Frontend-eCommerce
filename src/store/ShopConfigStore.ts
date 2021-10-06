import { makeAutoObservable } from 'mobx'
import { TShopConfig, TShopSlider } from '../types'
import ShopApi from '../http/ShopApi'

class ShopConfigStore {
  private _config: TShopConfig = {} as any
  private _slider: TShopSlider[] = []

  constructor() {
    ShopApi.fetchConfig().then(data => (this._config = data))
    ShopApi.fetchSlider().then(data => (this._slider = data))
    makeAutoObservable(this)
  }

  get config() {
    return this._config
  }

  get slider() {
    return this._slider
  }
}

const shopConfigStore = new ShopConfigStore()

export { shopConfigStore }
