import { LoginCallback } from '@okta/okta-react'
import { Container } from 'semantic-ui-react'
import { type IRouterProps } from '../hook/useRouter'
import { Home, Login, Protected, SignUp } from '../components'

export const RouteConfig: IRouterProps[] = [
  { path: '/register', component: SignUp, protected: false },
  { path: '/login/callback', component: LoginCallback },
  { path: '/', component: Container },
  { path: '/home', index: true },
  { path: '/home', component: Home, protected: false },
  { path: '/protected', component: Protected, protected: true },
  { path: '/login', component: Login }
]
