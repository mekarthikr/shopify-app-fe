import { LoginCallback } from '@okta/okta-react'
import { Register } from '../components/register/register'
import { Container } from '../components/container/container'
import { type IRouterProps } from '../hook/useRouter'
import { Home } from '../components/home/home'
import { Protected } from '../components/protected/protected'
import { Signup } from '../components/signup/signup'

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
    path: '/signin'
  }
]
