import { $authHost, $host } from './index'
import { TInfoPagesData, TResponseMessage } from '../types'

class InfoApi {
  public async fetchInfoPagesData(id: string): Promise<TInfoPagesData> {
    const { data } = await $host.get('api/info/' + id)
    return data
  }

  public async updateInfoPagesData(
    id: string,
    updateData: FormData
  ): Promise<TResponseMessage> {
    const { data } = await $authHost.put('api/info/' + id, updateData)
    return data
  }
}

export default new InfoApi()
