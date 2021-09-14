import { makeAutoObservable } from 'mobx'
import { ShopConfigType } from '../types'

class ShopConfigStore {
  private _shopConfig: ShopConfigType

  constructor() {
    this._shopConfig = {
      d582_exShopSiteTitle: 'Tupperware',
      d583_exShopSiteSubTitle:
        'Инновационная посуда из высокотехнологичных полимеров',
      d580_exShopSiteID: '1101',
      d581_exShopSiteBaseLink: 'https://siteup.com.ua/demo/msk/tupperware/',
      d584_exShopSiteAddress: 'г.Москва, ул.Демонстративная, 8',
      d585_exShopSitePhone: '+7 495 555-43-21',
      d586_exShopSiteEmail: 'contact@company.com',
      d587_exShopSitePaginationNumber: '20',
      d589_exShopSiteCurrency: 'руб.',
      d588_exShopSiteCatalogPage: 'grid4',
      d590_exShopSiteCategoryNumber: '3',
      d593_exShopSiteTheme: 'theme01',
      d591_exShopSiteCopyright: '2020-2021 © «eCommerceRu» Все права защищены',
      d594_exShopSiteSocialNetwork: 'TODO',
      d595_exShopSiteCategoryCloudNumber: '1;2;3',
      d601_exShopSiteCardView: 'square',
      d602_exShopSiteGridView: 'square',
      d603_exShopSiteDetailView: 'square',
      d691_exCategory1: 'base',
      d692_exCategory2: 'subbase',
      d693_exCategory3: 'tags',
      d592_exShopSiteSliderHeader:
        'Инновационная посуда из высокотехнологичных полимеров; г.Киев, ул.Демонстративная, 8. Тел.: +7 495 555-43-21; Инновационная посуда из высокотехнологичных полимеров; г.Киев, ул.Демонстративная, 8. Тел.: +7 495 555-43-21',
      d599_exShopSiteDiscountCards: 'A03; A208; I34; B27; G118; B19; E09; U05',
      d600_exShopSiteNewCards: 'A55; E08; I90; V31; I80; V33; G102; G74',
    }
    makeAutoObservable(this)
  }

  get shopConfig() {
    return this._shopConfig
  }
}

const shopConfigStore = new ShopConfigStore()

export { shopConfigStore }