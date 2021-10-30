import { $authHost, $host } from './index'
import { TProductPageData, TProductSearchByNameResult } from '../types'

export type TUpdateImageById = {
  oldName: string
  preview: 'true' | 'false'
  img: File
}

export type TUpdateOrderImagesBody = {
  name: string
  order: number
}

class ProductApi {
  public async fetchOneProduct(id: string): Promise<TProductPageData> {
    const { data } = await $host.get('api/product/' + id)
    return data
  }

  public async fetchLabels(): Promise<string[]> {
    const { data } = await $host.get('api/product/list/info/labels')
    return data
  }

  public async fetchStatuses(): Promise<string[]> {
    const { data } = await $host.get('api/product/list/info/statuses')
    return data
  }

  public async fetchSuppliers(): Promise<string[]> {
    const { data } = await $host.get('api/product/list/info/suppliers')
    return data
  }

  public async fetchUtils(): Promise<string[]> {
    const { data } = await $host.get('api/product/list/info/units')
    return data
  }

  public async fetchSearchProductsByName(
    name: string
  ): Promise<TProductSearchByNameResult[] | null> {
    const { data } = await $host.get('api/product/list/search/' + name)
    return data
  }

  public async updateProductById(
    id: string,
    body: any
  ): Promise<TProductPageData> {
    const { data } = await $authHost.put('api/product/update/info/' + id, body)
    return data
  }

  public async updateImage(body: TUpdateImageById) {
    const { data } = await $authHost.put('api/product/update/img', body)
    return data
  }

  public async updateOrderImages(body: TUpdateOrderImagesBody[]) {
    const { data } = await $authHost.put('api/product/update/order-img', body)
    return data
  }
}

export default new ProductApi()
