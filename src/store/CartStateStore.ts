import { makeAutoObservable } from 'mobx'
import { TAddItemCartStore, TItemsCartStore } from '../types'
import { modalStateStore } from './ModalStateStore'

class CartStore {
  private _finalTotal: string
  private _finalCount: string
  private _items: TItemsCartStore[]

  constructor() {
    this._finalTotal = '0.00'
    this._finalCount = '0'
    this._items = []
    this.restoreCartFromLocalStore()
    this.updateCart()
    makeAutoObservable(this)
  }

  private updateCart() {
    this.saveCartToLocalStore()
    this.refreshFinalTotal()
    this.refreshFinalCount()
  }

  private restoreCartFromLocalStore() {
    const LSData: string | null = localStorage.getItem('CartStore')
    if (typeof LSData === 'string') this._items = JSON.parse(LSData)
  }

  private saveCartToLocalStore() {
    localStorage.setItem('CartStore', JSON.stringify(this._items))
  }

  private refreshFinalTotal() {
    let result: number = 0

    for (const item of this._items) {
      result += Number(item.priceAll)
    }

    this._finalTotal = result.toFixed(2)
  }

  private refreshFinalCount() {
    let result: number = 0
    for (const item of this._items) {
      result += Number(item.count)
    }
    this._finalCount = result.toString()
  }

  public set addItem({ id, name, price, img, count }: TAddItemCartStore) {
    // show notification
    modalStateStore.showProductToCartNotify()
    count = count ? count : 1
    // add first item if array is empty
    if (this._items.length === 0) {
      this._items.push({
        id,
        name,
        price,
        img,
        priceAll: (Number(price) * count).toFixed(2),
        count,
      })
      this.updateCart()
    }

    // Check if new product id exist
    let exist = false
    for (const item of this._items) {
      if (id === item.id) exist = true
    }

    // If -  product id exist incrice count and sum total product price
    // Else - if product not exist add as new product
    if (exist) {
      for (let i = 0; i < this._items.length; i++) {
        const item = this._items[i]
        if (item.id === id) {
          this._items[i].count += count
          this._items[i].priceAll = (
            Number(this._items[i].priceAll) +
            Number(this._items[i].price) * count
          ).toFixed(2)
          break
        }
      }
    } else {
      this._items.push({
        id,
        name,
        price,
        img,
        priceAll: price,
        count: 1,
      })
    }
    this.updateCart()
  }

  public set removeItem(id: string) {
    for (let i = 0; i < this._items.length; i++) {
      const item = this._items[i]
      if (item.id === id) {
        this._items.splice(i, 1)
      }
    }
    this.updateCart()
  }

  public set decreaseItem(id: string) {
    for (let i = 0; i < this._items.length; i++) {
      const item = this._items[i]
      if (item.id === id) {
        item.count--
        item.priceAll = (Number(item.priceAll) - Number(item.price)).toFixed(2)
        if (item.count === 0) this.removeItem = id
      }
    }
    this.updateCart()
  }

  public set increaseItem(id: string) {
    for (let i = 0; i < this._items.length; i++) {
      const item = this._items[i]
      if (item.id === id) {
        item.count++
        item.priceAll = (Number(item.priceAll) + Number(item.price)).toFixed(2)
      }
    }
    this.updateCart()
  }

  public removeAll() {
    this._items = []
    this.updateCart()
  }

  public get getItems() {
    return this._items
  }

  public get getFinalTotal() {
    return this._finalTotal
  }

  public get getFinalCount() {
    return this._finalCount
  }
}

const cartStore = new CartStore()

export { cartStore }
