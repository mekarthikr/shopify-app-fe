import { LoginCallback } from '@okta/okta-react'
import { Container } from 'semantic-ui-react'
import { type IRouterProps } from '../hook/useRouter'
import { Home, Protected, Register, Signup } from '../components'

export const RouteConfig: IRouterProps[] = [
  {
    path: '/register',
    component: Register,
    protected: false
  },
  {
    path: '/login/callback',
    component: LoginCallback
  },
  {
    path: '/',
    component: Container
  },
  {
    index: true,
    path: '/home'
  },
  {
    component: Home,
    path: '/home',
    protected: false
  },
  {
    component: Protected,
    path: '/protected',
    protected: true
  },
  {
    component: Signup,
    path: '/login'
  }
]
