import { ReactElement } from 'react'
import { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { InfoContent } from '../component/user/info/InfoContent'
import { INFO_ROUTE } from '../routes'

const InfoPage: FC = (): ReactElement => {
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
        <Route
          key={name}
          path={INFO_ROUTE + '/' + name}
          component={InfoContent}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  )
}

export { InfoPage }