import { makeAutoObservable } from 'mobx'

class ShopConfigEditModalState {
  private _update: boolean
  constructor() {
    this._update = false
    makeAutoObservable(this)
  }

  get update() {
    return this._update
  }

  public updating() {
    this._update = !this._update
  }
}

const shopConfigEditModalState = new ShopConfigEditModalState()

export { shopConfigEditModalState }
