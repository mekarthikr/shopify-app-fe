import React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { LoginCallback, useOktaAuth } from '@okta/okta-react'
import { AuthWrapper } from '../components/authWrapper/authWrapper'
import { RegisterPage } from '../components/register/register'

export const AppRoutes: React.FC = () => {
  const navigate = useNavigate()
  const { oktaAuth, authState } = useOktaAuth()
  return (
    <Routes>
      <Route index={true} element={<Navigate to={'/home'} />} />
      <Route
        path='/home'
        element={
          <>
            {authState?.isAuthenticated != null &&
              (authState.isAuthenticated ?? false) && (
                <button
                  onClick={() => {
                    oktaAuth
                      .signOut()
                      .then(() => {
                        window.location.replace(window.location.origin)
                      })
                      .catch((error) => {
                        throw error
                      })
                  }}>
                  Signout
                </button>
            )}
            <h1>Home</h1>{' '}
            <button
              onClick={() => {
                navigate('/protected')
              }}>
              {' '}
              Click to go to Protected{' '}
            </button>
          </>
        }
      />
      <Route
        path='/protected'
        element={
          <AuthWrapper>
            <>
              <h1>Protected</h1>
            </>
          </AuthWrapper>
        }
      />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login/callback' element={<LoginCallback />} />
    </Routes>
  )
}
