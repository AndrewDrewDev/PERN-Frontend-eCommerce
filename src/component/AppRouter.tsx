import { FC, ReactElement } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { PageNotFound } from '../pages/PageNotFound'
import { publicRoutes } from '../routes'
import { TRoutes } from '../types'

const AppRouter: FC = (): ReactElement => {
  return (
    <>
      <Switch>
        {publicRoutes.map(({ path, component }: TRoutes) => (
          <Route key={path} path={path} component={component} exact />
        ))}
        <Route path="/404" exact>
          <PageNotFound title={'Страница не найдена'} />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </>
  )
}

export { AppRouter }
