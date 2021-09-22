import { $host } from './index'
import { TCategoryInfoByLevel, TCategoryProducts } from '../types'

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
  }: TfetchProducts): Promise<TCategoryProducts[]> {
    return await $host.get('api/category', {
      params: {
        name,
        limit,
        page,
      },
    })
  }

  public async fetchInfoByLevel(
    level: number
  ): Promise<TCategoryInfoByLevel[]> {
    const { data } = await $host.get('api/category/cloud/' + level)
    return data
  }
}

export default new CategoryApi()
