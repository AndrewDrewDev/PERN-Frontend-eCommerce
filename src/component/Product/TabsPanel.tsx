import { ReactElement } from 'react'
import { useState } from 'react'
import { FC } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import textToHtml from '../../utils/textToHtml'

interface ITabsPanelProps {
  description: string
  info: string
  paymentDelivery: string
  reviews: string
}

const tabStyle =
  'text-gray-600 py-4 px-6 block hover:text-blue-500 border-b-2 border-white focus:outline-none'

const selectedTabStyle =
  'text-blue-500 font-medium border-blue-500 duration-500'

const TabsPanel: FC<ITabsPanelProps> = ({
  info,
  description,
  paymentDelivery,
  reviews,
}): ReactElement => {
  const [tabIndex, setTabIndex] = useState(0)

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
          {description ? textToHtml(description) : 'Описание отсутствует'}
        </TabPanel>
        <TabPanel
          selectedClassName="opacity-100 duration-1000"
          className="opacity-0"
        >
          {info}
        </TabPanel>
        <TabPanel
          selectedClassName="opacity-100 duration-1000"
          className="opacity-0"
        >
          {paymentDelivery}
        </TabPanel>
        <TabPanel
          selectedClassName="opacity-100 duration-1000"
          className="opacity-0"
        >
          {reviews}
        </TabPanel>
      </div>
    </Tabs>
  )
}

export { TabsPanel }
