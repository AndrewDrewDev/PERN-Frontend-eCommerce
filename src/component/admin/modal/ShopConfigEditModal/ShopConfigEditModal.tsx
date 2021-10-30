import { observer } from 'mobx-react-lite'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import { modalStateStore } from '../../../../store/ModalStateStore'
import { WideModalWrapper } from '../../../user/modal/WideModalWrapper'
import { BaseInfoTabBody } from './BaseInfoTabBody'
import { CategoriesTabBody } from './CategoriesTabBody'
import { InfoPagesTabBody } from './InfoPagesTabBody'

const ShopConfigEditModal = observer(() => {
  const isShowing = modalStateStore.shopConfigEditModalState.isShowing

  const close = () => {
    modalStateStore.shopConfigEditModalState.isShowing = false
  }

  const styleActiveTab =
    'flex border-t-2 duration-500 border-red-500 bg-blue-500 text-white items-center text-lg'
  const styleTab = 'mr-1 border-t-2 bg-blue-200  px-3 py-1 rounded-t-lg'
  if (isShowing)
    return (
      <WideModalWrapper active={isShowing} setActive={close}>
        <Tabs>
          <TabList className="flex border-b-2 border-blue-500 items-center text-lg mb-5">
            <Tab selectedClassName={styleActiveTab} className={styleTab}>
              Управление магазином
            </Tab>
            <Tab selectedClassName={styleActiveTab} className={styleTab}>
              Управление категориями
            </Tab>
            <Tab selectedClassName={styleActiveTab} className={styleTab}>
              Редактирование Info Pages
            </Tab>
          </TabList>
          <TabPanel
            selectedClassName="opacity-100 duration-500"
            className="opacity-0"
          >
            {isShowing ? (
              <BaseInfoTabBody />
            ) : (
              <div className="my-5 text-center text-2xl">
                Что-то пошло не так!
              </div>
            )}
          </TabPanel>
          <TabPanel
            selectedClassName="opacity-100 duration-500"
            className="opacity-0"
          >
            <CategoriesTabBody />
          </TabPanel>
          <TabPanel>
            <InfoPagesTabBody />
          </TabPanel>
        </Tabs>
      </WideModalWrapper>
    )
  return <></>
})

export { ShopConfigEditModal }
