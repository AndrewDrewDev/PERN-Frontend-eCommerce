import { $authHost, $host } from './index'
import {
  TShopConfig,
  TShopCustomCategoryProducts,
  TShopSlider,
  TUpdateCustomCategoryProductsBody,
} from '../types'

class ShopApi {
  public async fetchConfig(): Promise<TShopConfig> {
    const { data } = await $host.get('api/shop/config')
    return data
  }

  public async updateConfig(body: TShopConfig): Promise<TShopConfig> {
    const { data } = await $authHost.put('api/shop/config', body)
    return data
  }

  public async fetchSlider(): Promise<TShopSlider[]> {
    const { data } = await $host.get('api/shop/slider')
    return data
  }

  public async fetchCustomCategoryProducts(
    name: string
  ): Promise<TShopCustomCategoryProducts> {
    const { data } = await $host.get(
      'api/shop/custom_category_products/' + name
    )
    return data
  }

  public async createCustomCategoryProduct(
    name: string,
    body: TUpdateCustomCategoryProductsBody
  ): Promise<TShopCustomCategoryProducts> {
    const { data } = await $authHost.post(
      'api/shop/custom_category_products/' + name,
      body
    )
    return data
  }

  public async deleteCustomCategoryProduct(
    name: string,
    body: TUpdateCustomCategoryProductsBody
  ): Promise<TShopCustomCategoryProducts> {
    const { data } = await $authHost.delete(
      'api/shop/custom_category_products/' + name,
      { data: body }
    )
    return data
  }

  public async updateCustomCategoryProducts(
    name: string,
    body: string[]
  ): Promise<TShopCustomCategoryProducts> {
    const { data } = await $authHost.put(
      'api/shop/custom_category_products/' + name,
      { data: body }
    )
    return data
  }
}

export default new ShopApi()
