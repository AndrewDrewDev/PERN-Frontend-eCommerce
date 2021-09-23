import { $host } from './index'
import { TCategoryInfoByLevel, TMainProductsData } from '../types'
import { TBreadcrumbComponentItem } from '../component/user/product/Breadcrumb'

type TfetchProducts = {
  name: string
  limit: number
  page: number
}

type TFetchInfo = {
  name: string
  count: string
}

class CategoryApi {
  public async fetchProducts({
    name,
    limit,
    page,
  }: TfetchProducts): Promise<TMainProductsData[]> {
    const { data } = await $host.get('api/category', {
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

  public async fetchBreadcrumb(
    url: string
  ): Promise<TBreadcrumbComponentItem[]> {
    const { data } = await $host.get('api/category/breadcrumb/' + url)
    return data
  }
}

export default new CategoryApi()
