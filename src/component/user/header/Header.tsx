import { ReactElement } from 'react'
import { FC } from 'react'
import { shopConfigStore } from '../../../store/ShopConfigStore'
import { HeaderTitle } from './HeaderTitle'
import { HeaderMenuBarButton } from './HeaderMenuBarButton'
import { HeaderCartBarButton } from './HeaderCartBarButton'
import { HeaderNavPanel } from './HeaderNavPanel'
import { HeaderInputSearchBySitePopup } from './HeaderInputSearchBySitePopup'
import { LeftNavMenuBar } from '../common/LeftNavMenuBar'
import { useState } from 'react'
import { RightCartMenuBar } from '../common/RightCartMenuBar'
import { HeaderLoginStatus } from './HeaderLoginStatus'
import { observer } from 'mobx-react-lite'

const Header: FC = observer((): ReactElement => {
  let [showLeftNavMenuBar, setShowLeftNavMenuBar] = useState(false)
  let [showRightCartMenuBar, setShowRightMenuBar] = useState(false)

  const { config, userAccountData } = shopConfigStore

  return (
    <header>
      {userAccountData ? <HeaderLoginStatus {...userAccountData} /> : null}
      <div className="relative container mx-auto px-6 py-3 flex items-center justify-between">
        <HeaderMenuBarButton
          onClick={() => setShowLeftNavMenuBar(!showLeftNavMenuBar)}
        />
        <LeftNavMenuBar
          show={showLeftNavMenuBar}
          setShow={setShowLeftNavMenuBar}
        />
        <RightCartMenuBar
          show={showRightCartMenuBar}
          setShow={setShowRightMenuBar}
        />
        <HeaderTitle
          title={config.title}
          subtitle={config.sub_title}
          address={config.address}
          phone={config.phone}
        />
        <HeaderCartBarButton
          onClick={() => setShowRightMenuBar(!showRightCartMenuBar)}
        />
      </div>
      <HeaderNavPanel />
      <HeaderInputSearchBySitePopup />
    </header>
  )
})

export { Header }
