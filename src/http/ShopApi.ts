import { $authHost, $host } from './index'
import { TShopConfig, TShopSlider } from '../types'

class ShopApi {
  public async fetchConfig(): Promise<TShopConfig> {
    const { data } = await $host.get('/api/shop/config')
    return data
  }

  public async updateConfig(body: TShopConfig): Promise<TShopConfig> {
    const { data } = await $authHost.put('/api/shop/config', body)
    return data
  }

  public async fetchSlider(): Promise<TShopSlider[]> {
    const { data } = await $host.get('/api/shop/slider')
    return data
  }
}

export default new ShopApi()
