import { FC, ReactElement } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { PageNotFound } from '../pages/PageNotFound'
import { publicRoutes } from '../routes/routes'
import { TRoutes } from '../types'

const AppRouter: FC = (): ReactElement => {
  return (
    <div className="container mx-auto px-6 my-3">
      <Switch>
        {publicRoutes.map(({ path, component }: TRoutes) => (
          <Route key={path} path={path} component={component} exact />
        ))}
        <Route path="/404" exact>
          <PageNotFound title={'Страница не найдена'} />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </div>
  )
}

export { AppRouter }
