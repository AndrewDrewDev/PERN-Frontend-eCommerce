import { makeAutoObservable } from "mobx"

export type TCategoryData = {
  name: string
  id: string
  count: number
}

class CategoriesPageStore {
  private _category1: TCategoryData[]
  private _category2: TCategoryData[]
  private _category3: TCategoryData[]

  constructor() {
    this._category1 = [
      {
        name: "Категория1-1",
        id: "Category1-1",
        count: 10,
      },
      {
        name: "Категория1-2",
        id: "Category1-2",
        count: 10,
      },
      {
        name: "Категория1-3",
        id: "Category1-3",
        count: 10,
      },
    ]

    this._category2 = [
      {
        name: "Категория2-1",
        id: "Category2-1",
        count: 10,
      },
      {
        name: "Категория2-2",
        id: "Category2-2",
        count: 10,
      },
      {
        name: "Категория2-3",
        id: "Category2-3",
        count: 10,
      },
    ]

    this._category3 = [
      {
        name: "Категория3-1",
        id: "Category3-1",
        count: 10,
      },
      {
        name: "Категория3-2",
        id: "Category3-2",
        count: 10,
      },
      {
        name: "Категория3-3",
        id: "Category3-3",
        count: 10,
      },
    ]

    makeAutoObservable(this)
  }

  get category1() {
    return this._category1
  }

  get category2() {
    return this._category2
  }

  get category3() {
    return this._category3
  }
}

const categoriesPageStore = new CategoriesPageStore()

export { categoriesPageStore }
