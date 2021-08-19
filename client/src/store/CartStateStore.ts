import { makeAutoObservable } from 'mobx'
import { TAddItemCartStore } from '../types'

type TItemsCartStore = {
  id: string
  name: string
  price: string
  priceAll: string
  img: string
  count: number
}

class CartStore {
  private _finalTotal: string
  private _finalCount: number
  private _items: TItemsCartStore[]

  constructor() {
    this._finalTotal = '0.00'
    this._finalCount = 0
    this._items = []
    this.restoreCartFromLocalStore()
    makeAutoObservable(this)
  }

  private restoreCartFromLocalStore() {
    const LSdata: string | null = localStorage.getItem('CartStore')
    if (typeof LSdata === 'string') this._items = JSON.parse(LSdata)
  }

  private saveCartToLocalStore() {
    localStorage.setItem('CartStore', JSON.stringify(this._items))
  }

  public set addItem({ id, name, price, img }: TAddItemCartStore) {
    // add first item if array is empty
    if (this._items.length === 0) {
      this._items.push({
        id,
        name,
        price,
        img,
        priceAll: price,
        count: 1,
      })
      return
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
          this._items[i].count++
          this._items[i].priceAll = (
            Number(this._items[i].priceAll) + Number(this._items[i].price)
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

    this.saveCartToLocalStore()
  }
  public removeItem(id: string) {}
  public decreaceItem(id: string) {}
  public increaceItem(id: string) {}
  public refreshFinalTotal(arr: TItemsCartStore) {}

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
