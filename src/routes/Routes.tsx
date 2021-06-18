import { FunctionComponent as FC } from 'react'
import Login from '../components/Login'
import { Switch, Route, Redirect } from 'react-router-dom'
import Register from '../components/Register'
import Feed from '../components/Feed'
import Profile from '../components/Profile'
import ProtectedRoute from './ProtectedRoute'
import ForgetPassword from '../components/ForgetPassword'
import ResetPassword from '../components/ResetPassword'

interface IRoute {
  name: string
  path: string
  component: React.FC
  private: boolean
}

const RoutesWrapper: FC = (): JSX.Element => {
  const routesList: IRoute[] = [
    {
      name: 'Login',
      path: '/login',
      component: Login,
      private: false,
    },
    {
      name: 'Register',
      path: '/register',
      component: Register,
      private: false,
    },
    {
      name: 'ForgetPassword',
      path: '/forgetpassword',
      component: ForgetPassword,
      private: false,
    },
    {
      name: 'ResetPassword',
      path: '/resetpassword',
      component: ResetPassword,
      private: false,
    },
    {
      name: 'feed',
      path: '/feed',
      component: Feed,
      private: true,
    },
    {
      name: 'profile',
      path: '/:username',
      component: Profile,
      private: true,
    },
  ]

  return (
    <main>
      <Switch>
        {routesList.map((route) =>
          route.private ? (
            <ProtectedRoute
              key={route.name}
              path={route.path}
              component={route.component}
            />
          ) : (
            <Route
              key={route.name}
              path={route.path}
              component={route.component}
            />
          )
        )}
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </main>
  )
}

export default RoutesWrapper
