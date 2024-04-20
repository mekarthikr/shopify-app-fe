import { Navigate, Route } from 'react-router-dom'
import { AuthWrapper } from '../components/auth-wrapper/authWrapper'

export interface IRouterProps {
  path: string
  component?: React.FC
  protected?: boolean
  index?: boolean
}

export const useRouter = (
  routes: IRouterProps[]
): { routes: React.ReactElement[] } => {
  const generateRoutes = (routes: IRouterProps[]): React.ReactElement[] => {
    return routes.map((route) => {
      let element
      if (route.index ?? false) {
        return (
          <Route
            index={true}
            element={<Navigate to={route.path} />}
            key={`${route.path}-route-index`}
          />
        )
      }
      if (route.component !== undefined) {
        if (route.protected ?? false) {
          element = (
            <AuthWrapper>
              <route.component />
            </AuthWrapper>
          )
        } else {
          element = <route.component />
        }
      }
      return (
        <Route
          path={route.path}
          element={element}
          key={`${route.path}-route`}
        />
      )
    })
  }

  return { routes: generateRoutes(routes) }
}
