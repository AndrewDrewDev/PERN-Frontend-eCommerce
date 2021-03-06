import { makeAutoObservable } from 'mobx'
import {
  TCategoryInfoByLevel,
  TCSInfoByUrl,
  TCSInfoByUrlData,
  TMainProductsData,
} from '../types'
import CategoryApi from '../http/CategoryApi'

class CategoryStore {
  private _isLoaded: boolean = false
  private _category1Info: TCategoryInfoByLevel[] | null = []
  private _category2Info: TCategoryInfoByLevel[] | null = []
  private _category3Info: TCategoryInfoByLevel[] | null = []
  private _categoryDiscountInfo: TCategoryInfoByLevel[] | null = []
  private _categoryNewInfo: TCategoryInfoByLevel[] | null = []
  private _categoryAllInfo: TCategoryInfoByLevel[] | null = []
  private _categoryDiscountProducts: TMainProductsData[] | null = []
  private _categoryNewProducts: TMainProductsData[] | null = []
  private _infoByUrl: TCSInfoByUrl = {}

  constructor() {
    this.updateFetchData()
    makeAutoObservable(this)
  }

  private async fetchData() {
    await CategoryApi.fetchProducts({
      name: 'Novinki',
      limit: 8,
      page: 1,
      type: 'custom',
    }).then(data => (this._categoryNewProducts = data))
    await CategoryApi.fetchProducts({
      name: 'Aktsii',
      limit: 8,
      page: 1,
      type: 'custom',
    }).then(data => (this._categoryDiscountProducts = data))
    await CategoryApi.fetchCustomInfoById('Novinki').then(
      data => (this._categoryNewInfo = data)
    )
    await CategoryApi.fetchCustomInfoById('Aktsii').then(
      data => (this._categoryDiscountInfo = data)
    )
    await CategoryApi.fetchAllInfoById().then(
      data => (this._categoryAllInfo = data)
    )
    await CategoryApi.fetchInfoByLevel(1).then(
      data => (this._category1Info = data)
    )
    await CategoryApi.fetchInfoByLevel(2).then(
      data => (this._category2Info = data)
    )
    await CategoryApi.fetchInfoByLevel(3)
      .then(data => (this._category3Info = data))
      .then(() => (this._infoByUrl = this.joinAllCategory()))
  }

  get isLoaded() {
    return this._isLoaded
  }

  // Join all category
  private joinAllCategory(): TCSInfoByUrl {
    const result: TCSInfoByUrl = {}
    let data: TCategoryInfoByLevel[] = []
    if (this._category1Info) data = [...data, ...this._category1Info]
    if (this._category2Info) data = [...data, ...this._category2Info]
    if (this._category3Info) data = [...data, ...this._category3Info]
    if (this._categoryNewInfo) data = [...data, ...this._categoryNewInfo]
    if (this._categoryDiscountInfo)
      data = [...data, ...this._categoryDiscountInfo]
    if (this._categoryAllInfo) data = [...data, ...this._categoryAllInfo]

    for (const i of data) {
      result[i.url] = { name: i.name, url: i.url, count: i.count }
    }

    return result
  }

  public async updateFetchData() {
    await this.fetchData()
    this._isLoaded = true
  }

  public infoById(id: string): TCSInfoByUrlData {
    return this._infoByUrl[id]
  }

  public get category1Info() {
    return this._category1Info
  }

  public get category2Info() {
    return this._category2Info
  }

  public get category3Info() {
    return this._category3Info
  }

  public get categoryDiscountInfo() {
    return this._categoryDiscountInfo
  }

  public get categoryNewInfo() {
    return this._categoryNewInfo
  }

  public get categoryDiscountProducts() {
    return this._categoryDiscountProducts
  }

  public get categoryNewProducts() {
    return this._categoryNewProducts
  }
}

const categoriesPageStore = new CategoryStore()

export { categoriesPageStore }
