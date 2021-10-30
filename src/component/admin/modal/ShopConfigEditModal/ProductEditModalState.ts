import { makeAutoObservable } from 'mobx'

class ProductEditModalState {
  private _update: boolean

  constructor() {
    this._update = false
    makeAutoObservable(this)
  }

  public get update() {
    return this._update
  }

  public updating() {
    this._update = !this._update
  }
}
const productEditModalState = new ProductEditModalState()

export { productEditModalState }
