import { makeAutoObservable } from 'mobx'

export type TProductModalState = {
  isShowing: boolean
  productId: string
}

class ModalStateStore {
  private _productSliderWidgetState: TProductModalState = {
    isShowing: false,
    productId: '',
  }
  private _productQuickViewWidgetState: TProductModalState = {
    isShowing: false,
    productId: '',
  }

  private _productEditModalState: TProductModalState = {
    isShowing: false,
    productId: '',
  }

  constructor() {
    makeAutoObservable(this)
  }

  public closeAll() {
    this._productSliderWidgetState = {
      isShowing: false,
      productId: '',
    }
    this._productQuickViewWidgetState = {
      isShowing: false,
      productId: '',
    }
  }

  get productEditModalState() {
    return this._productEditModalState
  }

  set productEditModalState(newState) {
    this._productEditModalState = newState
  }

  get productSliderWidgetState() {
    return this._productSliderWidgetState
  }

  set productSliderWidgetState(newState) {
    this._productSliderWidgetState = newState
  }

  get productQuickViewWidgetState() {
    return this._productQuickViewWidgetState
  }

  set productQuickViewWidgetState(newState) {
    this._productQuickViewWidgetState = newState
  }
}

const modalStateStore = new ModalStateStore()

export { modalStateStore }
