import { $host } from './index'
import { TInfoPagesData } from '../types'

class InfoApi {
  public async fetchInfoPagesData(id: string): Promise<TInfoPagesData> {
    const { data } = await $host.get('api/info/' + id)
    return data
  }
}

export default new InfoApi()
