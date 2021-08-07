import { ReactElement } from 'react'
import { FC } from 'react'
import { shopConfigStore } from '../../../store/ShopConfigStore'
import { HeaderTitle } from './HeaderTitle'
import { HeaderMenuBarButton } from './HeaderMenuBarButton'
import { HeaderCartBarButton } from './HeaderCartBarButton'
import { HeaderNavPanel } from './HeaderNavPanel'
import { HeaderInputSearchBySite } from './HeaderInputSearchBySite'

const Header: FC = (): ReactElement => {
  const { shopConfig } = shopConfigStore

  return (
    <header>
      <div className="relative container mx-auto px-6 py-3 flex items-center justify-between">
        <HeaderMenuBarButton />
        <HeaderTitle
          title={shopConfig.d582_exShopSiteTitle}
          subtitle={shopConfig.d583_exShopSiteSubTitle}
          address={shopConfig.d584_exShopSiteAddress}
          phone={shopConfig.d585_exShopSitePhone}
        />
        <HeaderCartBarButton />
      </div>
      <HeaderNavPanel />
      <HeaderInputSearchBySite />
    </header>
  )
}

export { Header }
