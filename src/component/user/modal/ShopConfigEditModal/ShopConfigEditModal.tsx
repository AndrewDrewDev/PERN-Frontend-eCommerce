import { observer } from 'mobx-react-lite'
import { createContext, useEffect, useState } from 'react'

import { TShopConfig } from '../../../../types'
import { modalStateStore } from '../../../../store/ModalStateStore'
import { ModalWrapper } from '.././ModalComponents'
import Spinner from '../../common/Spinner'
import ShopApi from '../../../../http/ShopApi'
import { Dispatch } from 'react'
import { SetStateAction } from 'react'
import { ProductEditModalBody } from './ProductEditModalBody'

type TShopConfigEditModalContext = {
  shopConfig: TShopConfig
  setShopConfig: Dispatch<SetStateAction<TShopConfig | null | undefined>>
}

const ShopConfigEditModalContext = createContext<TShopConfigEditModalContext>(
  {} as any
)

const ShopConfigEditModal = observer(() => {
  const [shopConfig, setShopConfig] = useState<TShopConfig | null | undefined>()

  const isShowing = modalStateStore.shopConfigEditModalState.isShowing

  const close = () => {
    modalStateStore.shopConfigEditModalState.isShowing = false
    setShopConfig(undefined)
  }

  useEffect(() => {
    setShopConfig(null)
    ShopApi.fetchConfig().then(data => setShopConfig(data))
  }, [isShowing])

  if (isShowing && shopConfig && setShopConfig)
    return (
      <ShopConfigEditModalContext.Provider
        value={{
          shopConfig,
          setShopConfig,
        }}
      >
        <ModalWrapper closeHandler={close}>
          {isShowing && shopConfig ? (
            <ProductEditModalBody shopConfig={shopConfig} />
          ) : null}
          {shopConfig === null ? <Spinner /> : null}
        </ModalWrapper>
      </ShopConfigEditModalContext.Provider>
    )
  return <div className="text-center text-xl">Что-то пошло не так!</div>
})

export { ShopConfigEditModal }
