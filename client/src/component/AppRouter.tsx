import { FC, ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'
import { publicRoutes, RoutesType } from '../routes'

const AppRouter: FC = (): ReactElement => {
  // const isAuth: boolean = false // TODO: Add Auth routers 
  return (
    <>
      <Switch>
        {publicRoutes.map(({ path, component }: RoutesType) => (
          <Route key={path} path={path} component={component} exact />
        ))}
      </Switch>
    </>
  )
}

export { AppRouter }
