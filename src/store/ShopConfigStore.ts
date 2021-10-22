import { makeAutoObservable } from 'mobx'
import { TShopConfig, TShopSlider, TUserAccountData } from '../types'
import ShopApi from '../http/ShopApi'

class ShopConfigStore {
  private _userAccount: TUserAccountData | null = null
  private _config: TShopConfig = {} as any
  private _slider: TShopSlider[] = []

  constructor() {
    this.updateFetchData()
    makeAutoObservable(this)
  }

  private fetchData() {
    ShopApi.fetchConfig().then(data => (this._config = data))
    ShopApi.fetchSlider().then(data => (this._slider = data))
  }

  public updateFetchData() {
    this.fetchData()
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
