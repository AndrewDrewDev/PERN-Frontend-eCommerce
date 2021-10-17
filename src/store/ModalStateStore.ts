import { makeAutoObservable } from 'mobx'

export type TProductModalById = {
  isShowing: boolean
  productId: string
}

class ModalStateStore {
  private _productSliderWidgetState: TProductModalById = {
    isShowing: false,
    productId: '',
  }
  private _productQuickViewWidgetState: TProductModalById = {
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
