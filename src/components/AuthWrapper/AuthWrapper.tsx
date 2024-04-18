import { useOktaAuth } from '@okta/okta-react'
import React, { type ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dimmer, Loader } from 'semantic-ui-react'

export const AuthWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { authState } = useOktaAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (authState?.isAuthenticated === false) {
      window.localStorage.setItem('redirect-url', window.location.pathname)
      navigate('/signin')
    }
  }, [authState, authState?.isAuthenticated])

  if (authState === null || authState.isAuthenticated === false) {
    return (
      <>
        <Dimmer active inverted>
          <Loader size='large'>Redirecting to Login Page....</Loader>
        </Dimmer>
      </>
    )
  }
  return <>{children}</>
}
