import { observer } from 'mobx-react-lite'
import { FC, ReactElement, useState } from 'react'
import { shopConfigStore } from '../../../store/ShopConfigStore'
import { LeftNavMenuBar } from './LeftNavMenuBar'
import { RightCartMenuBar } from '../common/RightCartMenuBar'
import { HeaderCartBarButton } from './HeaderCartBarButton'
import { HeaderInputSearchBySitePopup } from './HeaderInputSearchBySitePopup'
import { HeaderLoginStatus } from './HeaderLoginStatus'
import { HeaderMenuBarButton } from './HeaderMenuBarButton'
import { HeaderNavPanel } from './HeaderNavPanel'
import { HeaderTitle } from './HeaderTitle'

const Header: FC = observer((): ReactElement => {
  let [showLeftNavMenuBar, setShowLeftNavMenuBar] = useState(false)
  let [showRightCartMenuBar, setShowRightMenuBar] = useState(false)

  const { config, userAccount } = shopConfigStore

  return (
    <header>
      {userAccount ? <HeaderLoginStatus {...userAccount} /> : null}
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
