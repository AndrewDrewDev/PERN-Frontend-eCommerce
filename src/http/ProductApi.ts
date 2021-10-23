import { $authHost, $host } from './index'
import { TProductPageData, TProductSearchByNameResult } from '../types'

class ProductApi {
  public async fetchOneProduct(id: string): Promise<TProductPageData> {
    const { data } = await $host.get('api/product/' + id)
    return data
  }

  public async fetchLabels(): Promise<string[]> {
    const { data } = await $host.get('api/product/info/labels')
    return data
  }

  public async fetchStatuses(): Promise<string[]> {
    const { data } = await $host.get('api/product/info/statuses')
    return data
  }

  public async fetchSuppliers(): Promise<string[]> {
    const { data } = await $host.get('api/product/info/suppliers')
    return data
  }

  public async fetchUtils(): Promise<string[]> {
    const { data } = await $host.get('api/product/info/units')
    return data
  }

  public async fetchSearchProductsByName(
    name: string
  ): Promise<TProductSearchByNameResult[] | null> {
    const { data } = await $host.get('api/product/search/' + name)
    return data
  }

  public async updateProductById(
    id: string,
    body: any
  ): Promise<TProductPageData> {
    const { data } = await $authHost.put('api/product/' + id, body)
    return data
  }
}

export default new ProductApi()
