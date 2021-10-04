import { $host } from './index'
import { TCategoryInfoByLevel, TMainProductsData } from '../types'
import { TBreadcrumbComponentItem } from '../component/user/product/Breadcrumb'

type TFetchProducts = {
  name: string
  limit: number
  page: number
  type: 'custom' | 'common'
}

type TFetchProductsUrls = {
  common: string
  custom: string
}

class CategoryApi {
  public async fetchProducts({
    name,
    limit,
    page,
    type,
  }: TFetchProducts): Promise<TMainProductsData[]> {
    const urls: TFetchProductsUrls = {
      common: 'api/category',
      custom: 'api/category/custom',
    }
    const { data } = await $host.get(urls[type], {
      params: {
        name,
        limit,
        page,
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
