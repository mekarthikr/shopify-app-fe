import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from '../components/container/container'
import { useRouter } from '../hook/useRouter'
import { RouteConfig } from '../config/router'

export const AppRoutes: React.FC = () => {
  const { routes } = useRouter(RouteConfig)
  return (
    <Routes>
      <Route path='/' element={<Container />}>
        {routes}
      </Route>
    </Routes>
  )
}
