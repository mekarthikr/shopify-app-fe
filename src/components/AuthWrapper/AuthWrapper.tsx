import { toRelativeUrl } from '@okta/okta-auth-js'
import { useOktaAuth } from '@okta/okta-react'
import React, { type ReactNode, useEffect } from 'react'

export const AuthWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { oktaAuth, authState } = useOktaAuth()

  useEffect(() => {
    if (authState?.isAuthenticated === false) {
      const originalUri = toRelativeUrl(
        window.location.href,
        window.location.origin
      )
      oktaAuth.setOriginalUri(originalUri)
      void oktaAuth.signInWithRedirect()
    }
  }, [authState, authState?.isAuthenticated, oktaAuth])

  if (authState === null || authState.isAuthenticated === false) {
    return <>{'Redirecting to Login Page....'}</>
  }
  return <>{children}</>
}
