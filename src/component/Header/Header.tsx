import { observer } from 'mobx-react-lite'
import { FC, ReactElement, useState } from 'react'
import { shopConfigStore } from '../../store/ShopConfigStore'
import { LeftNavMenuBar } from './LeftNavMenuBar'
import { RightCartMenuBar } from './RightCartMenuBar'
import { CartBarButton } from './CartBarButton'
import { InputSearchBySitePopup } from './InputSearchBySitePopup'
import { LoginStatus } from './LoginStatus'
import { MenuBarButton } from './MenuBarButton'
import { NavPanel } from './NavPanel'
import { Title } from './Title'

const Header: FC = observer((): ReactElement => {
  let [showLeftNavMenuBar, setShowLeftNavMenuBar] = useState(false)
  let [showRightCartMenuBar, setShowRightMenuBar] = useState(false)

  const { config, userAccount } = shopConfigStore

  return (
    <header>
      {userAccount ? <LoginStatus {...userAccount} /> : null}
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <MenuBarButton
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
        <Title
          title={config.title}
          subtitle={config.sub_title}
          address={config.address}
          phone={config.phone}
        />
        <CartBarButton
          onClick={() => setShowRightMenuBar(!showRightCartMenuBar)}
        />
      </div>
      <NavPanel />
      <InputSearchBySitePopup />
    </header>
  )
})

export { Header }
