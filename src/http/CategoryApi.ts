import { $authHost, $host } from './index'
import { TCategoryInfoByLevel, TMainProductsData } from '../types'
import { TBreadcrumbComponentItem } from '../component/user/product/Breadcrumb'

type TFetchProducts = {
  name: string
  limit: number
  page: number
  type: 'custom' | 'common' | 'label' | 'all'
  filters?: TProductsFiltersQueryParams | null
}

export type TUpdateOrderValue = {
  name: string
  index: number
}

export type TUpdateOrder = {
  data: TUpdateOrderValue[]
}

export type TFetchProductsFiltersByUrlCheckboxes =
  | { id: number; name: string; selected?: boolean }[]
  | null
export type TFetchProductsFiltersByUrl = {
  price: { min: string; max: string } | null
  labels: TFetchProductsFiltersByUrlCheckboxes
  suppliers: TFetchProductsFiltersByUrlCheckboxes
}

export type TProductsFiltersQueryParams = {
  price?: string
  label?: string
  supplier?: string
}

class CategoryApi {
  public async fetchProducts({
    name,
    limit,
    page,
    type,
    filters,
  }: TFetchProducts): Promise<TMainProductsData[]> {
    const { data } = await $host.get('api/category/products', {
      params: {
        name,
        limit,
        page,
        type,
        ...(filters && filters),
      },
    })
    return data
  }

  public async updateCategoryById(
    oldName: string,
    newName: string,
    formData: FormData
  ) {
    const { data } = await $authHost.put(
      `api/category/item/${oldName}/${newName}`,
      formData
    )
    return data
  }

  public async updateOrder(updateData: TUpdateOrder) {
    const { data } = await $authHost.put('api/category/order', updateData)
    return data
  }

  public async fetchInfoByLevel(
    level: number
  ): Promise<TCategoryInfoByLevel[]> {
    const { data } = await $host.get('api/category/info/cloud/' + level)
    return data
  }

  public async fetchCustomInfoById(
    url: string
  ): Promise<TCategoryInfoByLevel[]> {
    const { data } = await $host.get('api/category/info/custom/' + url)
    return data
  }

  public async fetchAllInfoById(): Promise<TCategoryInfoByLevel[]> {
    const { data } = await $host.get('api/category/info/all/')
    return data
  }

  public async fetchBreadcrumb(
    url: string
  ): Promise<TBreadcrumbComponentItem[]> {
    const { data } = await $host.get('api/category/breadcrumb/' + url)
    return data
  }

  public async fetchProductsFiltersByUrl(
    url: string
  ): Promise<TFetchProductsFiltersByUrl> {
    const { data } = await $host.get('api/category/info/filters/' + url)
    return data
  }
}

export default new CategoryApi()
