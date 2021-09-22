import { makeAutoObservable } from 'mobx'
import { TCategoryInfoByLevel, TCategoryProducts } from '../types'
import CategoryApi from '../http/CategoryApi'

class CategoryStore {
  private _category1: TCategoryInfoByLevel[] | null = []
  private _category2: TCategoryInfoByLevel[] | null = []
  private _category3: TCategoryInfoByLevel[] | null = []
  constructor() {
    CategoryApi.fetchInfoByLevel(1).then(data => (this._category1 = data))
    CategoryApi.fetchInfoByLevel(2).then(data => (this._category2 = data))
    CategoryApi.fetchInfoByLevel(3).then(data => (this._category3 = data))
    makeAutoObservable(this)
  }

  public get category1() {
    return this._category1
  }

  public get category2() {
    return this._category2
  }

  public get category3() {
    return this._category3
  }

  public set category1(data) {
    this._category1 = data
  }

  public set category2(data) {
    this._category2 = data
  }

  public set category3(data) {
    this._category3 = data
  }
}

const categoriesPageStore = new CategoryStore()

export { categoriesPageStore }
