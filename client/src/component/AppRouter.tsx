import { FC, ReactElement } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { publicRoutes} from '../routes'
import { MAIN_ROUTE } from '../routes'
import { TRoutes } from '../types'

const AppRouter: FC = (): ReactElement => {
  // const isAuth: boolean = false // TODO: Add Auth routers
  return (
    <>
      <Switch>
        {publicRoutes.map(({ path, component }: TRoutes) => (
          <Route key={path} path={path} component={component} exact />
        ))}
        <Redirect to={MAIN_ROUTE} />
      </Switch>
    </>
  )
}

export { AppRouter }
