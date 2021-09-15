import { $host } from './index'
import { TProductPageData } from '../types'

class ProductApi {
  public async fetchOneProduct(id: string): Promise<TProductPageData> {
    const { data }: { data: TProductPageData } = await $host.get(
      'api/product/' + id
    )
    return data
  }
}

export default new ProductApi()
