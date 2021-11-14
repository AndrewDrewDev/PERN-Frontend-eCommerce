import { makeAutoObservable } from 'mobx'
import CategoryApi, {
  TFetchProductsFiltersByUrl,
  TFetchProductsFiltersByUrlCheckboxes,
  TProductsFiltersQueryParams,
} from '../../http/CategoryApi'

class CategoryPageState {
  private _filters: TFetchProductsFiltersByUrl
  private _filterFetched: boolean
  private _urlState: string
  private _update: boolean
  constructor() {
    this._filterFetched = false
    this._filters = {} as any
    this._urlState = ''
    this._update = false
    makeAutoObservable(this)
  }

  get update(): boolean {
    return this._update
  }

  get filterFetched(): boolean {
    return this._filterFetched
  }

  public updating() {
    this._update = !this._update
  }

  get filters() {
    return this._filters
  }

  set filters(newValue) {
    this._filters = newValue
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
  public async fetchFilter(url: string) {
    this._filterFetched = false

    if (url !== this._urlState) {
      this._urlState = url
      this._filters = await CategoryApi.fetchProductsFiltersByUrl(url)
    }

    this._filterFetched = true
  }

  public async reloadFilter(url: string) {
    this._filters = await CategoryApi.fetchProductsFiltersByUrl(url)
    this.updating()
  }
}

const categoryPageState = new CategoryPageState()

export { categoryPageState }
