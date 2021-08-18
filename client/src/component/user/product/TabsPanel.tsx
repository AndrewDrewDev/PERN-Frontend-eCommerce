import { ReactElement } from 'react'
import { useState } from 'react'
import { FC } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

type TTabsPanel = {
  description: string
  info: string
  paymentDelivery: string
  reviews: string
}

const TabsPanel: FC<TTabsPanel> = (data): ReactElement => {
  const [tabIndex, setTabIndex] = useState(0)

  const tabStyle: string =
    'text-gray-600 py-4 px-6 block hover:text-blue-500 border-b-2 border-white focus:outline-none'

  const selectedTabStyle: string =
    'text-blue-500 font-medium border-blue-500 duration-500'

  return (
    <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
      <TabList className="md:flex text-center cursor-pointer bg-gray-50 rounded-lg">
        <Tab selectedClassName={selectedTabStyle} className={tabStyle}>
          Описание товара
        </Tab>
        <Tab selectedClassName={selectedTabStyle} className={tabStyle}>
          Дополнительная иноформация
        </Tab>
        <Tab selectedClassName={selectedTabStyle} className={tabStyle}>
          Оплата доставка
        </Tab>
        <Tab selectedClassName={selectedTabStyle} className={tabStyle}>
          Отзывы
        </Tab>
      </TabList>
      <div className="my-4 text-gray-600">
        <TabPanel
          selectedClassName="opacity-100 duration-1000"
          className="opacity-0"
        >
          {data.description}
        </TabPanel>
        <TabPanel
          selectedClassName="opacity-100 duration-1000"
          className="opacity-0"
        >
          {data.info}
        </TabPanel>
        <TabPanel
          selectedClassName="opacity-100 duration-1000"
          className="opacity-0"
        >
          {data.paymentDelivery}
        </TabPanel>
        <TabPanel
          selectedClassName="opacity-100 duration-1000"
          className="opacity-0"
        >
          {data.reviews}
        </TabPanel>
      </div>
    </Tabs>
  )
}

export { TabsPanel }
