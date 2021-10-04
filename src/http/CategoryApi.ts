import { $host } from './index'
import { TCategoryInfoByLevel, TMainProductsData } from '../types'
import { TBreadcrumbComponentItem } from '../component/user/product/Breadcrumb'

type TFetchProducts = {
  name: string
  limit: number
  page: number
  type: 'custom' | 'common'
}

class CategoryApi {
  public async fetchProducts({
    name,
    limit,
    page,
    type,
  }: TFetchProducts): Promise<TMainProductsData[]> {
    const { data } = await $host.get('api/category', {
      params: {
        name,
        limit,
        page,
        type,
      },
    })
    return data
  }

  public async fetchInfoByLevel(
    level: number
  ): Promise<TCategoryInfoByLevel[]> {
    const { data } = await $host.get('api/category/cloud/' + level)
    return data
  }

  public async fetchCustomInfoByLevel(
    url: string
  ): Promise<TCategoryInfoByLevel[]> {
    const { data } = await $host.get('api/category/custom/' + url)
    return data
  }

  public async fetchBreadcrumb(
    url: string
  ): Promise<TBreadcrumbComponentItem[]> {
    const { data } = await $host.get('api/category/breadcrumb/' + url)
    return data
  }
}

export default new CategoryApi()
