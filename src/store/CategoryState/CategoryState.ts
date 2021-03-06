import { makeAutoObservable } from 'mobx'
import CategoryApi, {
  TFetchProductsFiltersByUrl,
  TFetchProductsFiltersByUrlCheckboxes,
  TProductsFiltersQueryParams,
} from '../../http/CategoryApi'
import { CategoryTypeEnum } from '../../hooks/useCategoryType/types'
import { shopConfigStore } from '../ShopConfigStore'

class CategoryState {
  private _categoryType: CategoryTypeEnum
  private _categoryUrl: string
  private _filters: TFetchProductsFiltersByUrl
  private _filterFetched: boolean
  private _showFilters: boolean
  private _urlState: string
  private _update: boolean
  constructor() {
    this._categoryType = CategoryTypeEnum.COMMON
    this._categoryUrl = ''
    this._filterFetched = false
    this._showFilters = !shopConfigStore.isMobile // if mobile size filter hide
    this._filters = {} as TFetchProductsFiltersByUrl
    this._urlState = ''
    this._update = false
    makeAutoObservable(this)
  }

  get categoryType(): CategoryTypeEnum {
    return this._categoryType
  }

  set categoryType(value: CategoryTypeEnum) {
    this._categoryType = value
  }

  get categoryUrl(): string {
    return this._categoryUrl
  }

  set categoryUrl(value: string) {
    this._categoryUrl = value
  }

  get showFilters() {
    return this._showFilters
  }

  set showFilters(newValue) {
    this._showFilters = newValue
  }

  get update(): boolean {
    return this._update
  }

  get filterFetched(): boolean {
    return this._filterFetched
  }

  get filters() {
    return this._filters
  }

  set filters(newValue) {
    this._filters = newValue
  }

  public updating() {
    this._update = !this._update
  }

  public async resetFilters() {
    await categoryState.reloadFilter(this.categoryType, this.categoryUrl)
  }

  public getQueryString(): TProductsFiltersQueryParams {
    const { price, labels, suppliers } = this._filters
    const result: TProductsFiltersQueryParams = {}

    if (price) {
      const { min, max } = price
      result.price = `${min}-${max}`
    }

    function checkboxes(
      target: 'supplier' | 'label',
      filterCheckboxes: TFetchProductsFiltersByUrlCheckboxes
    ) {
      const checked = filterCheckboxes?.filter(i => i.selected)
      if (checked && checked.length > 0) {
        if (checked.length === 1) {
          result[target] = checked[0].id.toString()
        }
        result[target] = checked.map(i => i.id).join('-')
      }
    }

    checkboxes('supplier', suppliers)
    checkboxes('label', labels)

    return result
  }

  public copyFilters() {
    return Object.assign({}, this._filters)
  }

  // Update if category url changed through urlState
  public async fetchFilter(type: CategoryTypeEnum, url: string) {
    this._filterFetched = false

    if (url !== this._urlState) {
      this._urlState = url
      this._filters = await CategoryApi.fetchProductsFiltersByUrl(type, url)
    }

    this._filterFetched = true
  }

  public async reloadFilter(type: CategoryTypeEnum, url: string) {
    this._filters = await CategoryApi.fetchProductsFiltersByUrl(type, url)
    this.updating()
  }
}

const categoryState = new CategoryState()

export { categoryState }
