import { $host } from './index'
import { TProductPageData, TProductSearchByNameResult } from '../types'

class ProductApi {
  public async fetchOneProduct(id: string): Promise<TProductPageData> {
    const { data } = await $host.get('api/product/' + id)
    return data
  }

  public async fetchSearchProductsByName(
    name: string
  ): Promise<TProductSearchByNameResult[] | null> {
    const { data } = await $host.get('api/product/search/' + name)
    return data
  }
}

export default new ProductApi()
