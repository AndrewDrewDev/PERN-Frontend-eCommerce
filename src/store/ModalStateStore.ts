import { makeAutoObservable } from 'mobx'

export type TProductSliderWidgetState = {
  isShowing: boolean
  productId: string
}

class ModalStateStore {
  private _productSliderWidgetState: TProductSliderWidgetState = {
    isShowing: false,
    productId: '',
  }

  constructor() {
    makeAutoObservable(this)
  }

  get productSliderWidgetState() {
    return this._productSliderWidgetState
  }

  set productSliderWidgetState(newState) {
    this._productSliderWidgetState = newState
  }
}

const modalStateStore = new ModalStateStore()

export { modalStateStore }
