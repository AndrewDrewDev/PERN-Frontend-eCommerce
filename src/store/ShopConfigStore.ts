import { makeAutoObservable } from 'mobx'
import { TShopConfig, TShopSlider, TUserAccountData } from '../types'
import ShopApi from '../http/ShopApi'

class ShopConfigStore {
  private _isLoaded: boolean = false
  private _userAccount: TUserAccountData | null = null
  private _config: TShopConfig = {} as any
  private _slider: TShopSlider[] = []
  private _isMobile: boolean

  constructor() {
    this._isMobile = window.innerWidth >= 1024
    this.updateFetchData()
    makeAutoObservable(this)
  }

  private async fetchData() {
    await ShopApi.fetchConfig().then(data => (this._config = data))
    await ShopApi.fetchSlider().then(data => (this._slider = data))
  }

  public async updateFetchData() {
    await this.fetchData()
    this._isLoaded = true
  }

  get isMobile() {
    return this._isMobile
  }

  get isLoaded() {
    return this._isLoaded
  }

  get userAccount() {
    return this._userAccount
  }

  set userAccount(newData) {
    this._userAccount = newData
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
