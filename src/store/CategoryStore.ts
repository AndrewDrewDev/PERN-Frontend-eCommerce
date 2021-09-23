import { makeAutoObservable } from 'mobx'
import { TCategoryInfoByLevel, TCSInfoByUrl, TCSInfoByUrlData } from '../types'
import CategoryApi from '../http/CategoryApi'

class CategoryStore {
  private _currentName: string = ''
  private _currentCount: string = ''
  private _category1: TCategoryInfoByLevel[] | null = []
  private _category2: TCategoryInfoByLevel[] | null = []
  private _category3: TCategoryInfoByLevel[] | null = []
  private _infoByUrl: TCSInfoByUrl = {}

  constructor() {
    CategoryApi.fetchInfoByLevel(1).then(data => (this._category1 = data))
    CategoryApi.fetchInfoByLevel(2).then(data => (this._category2 = data))
    CategoryApi.fetchInfoByLevel(3)
      .then(data => (this._category3 = data))
      .then(() => (this._infoByUrl = this.joinAllCategory()))
    makeAutoObservable(this)
  }

  // Join all category
  private joinAllCategory(): TCSInfoByUrl {
    const result: TCSInfoByUrl = {}
    let data: TCategoryInfoByLevel[] = []
    if (this._category1) data = [...data, ...this._category1]
    if (this._category2) data = [...data, ...this._category2]
    if (this._category3) data = [...data, ...this._category3]

    for (const i of data) {
      result[i.url] = { name: i.name, url: i.url, count: i.count }
    }

    return result
  }

  public infoByUrl(url: string): TCSInfoByUrlData {
    return this._infoByUrl[url]
  }

  public get currentName() {
    return this._currentName
  }

  public get currentCount() {
    return this._currentCount
  }

  public set currentName(newName) {
    this._currentName = newName
  }

  public set currentCount(newCount) {
    this._currentCount = newCount
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
