import { ReactElement } from 'react'
import { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { InfoContent } from '../component/user/Info/InfoContent'
import { INFO_ROUTE } from '../utils/consts'

const InfoPage: FC = (): ReactElement => {
  // TODO: Add to shopConfig and excel file
  const infoPagesNames: string[] = [
    'about',
    'delivery',
    'faqs',
    'payment',
    'public-offer',
    'warranty',
  ]

  return (
    <Switch>
      {infoPagesNames.map(name => (
        <Route key={name} path={INFO_ROUTE + '/' + name} component={InfoContent} />
      ))}
      <Redirect to="/" />
    </Switch>
  )
}

export { InfoPage }
