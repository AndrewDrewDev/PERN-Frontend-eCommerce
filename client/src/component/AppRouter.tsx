import { FC, ReactElement } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { publicRoutes, RoutesType } from '../routes'
import { MAIN_ROUTE } from '../utils/consts'

const AppRouter: FC = (): ReactElement => {
  // const isAuth: boolean = false // TODO: Add Auth routers 
  return (
    <>
      <Switch>
        {publicRoutes.map(({ path, component }: RoutesType) => (
          <Route key={path} path={path} component={component} exact />
        ))}
        <Redirect to={MAIN_ROUTE}/>
      </Switch>
    </>
  )
}

export { AppRouter }
