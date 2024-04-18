import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Security } from '@okta/okta-react'
import OktaAuth, { toRelativeUrl } from '@okta/okta-auth-js'

import { AppRoutes } from './routes/routes'
import { OktaConfig } from './service/auth/okta'
import './App.css'

export const App: React.FC = () => {
  const oktaAuth = new OktaAuth(OktaConfig.oidc)
  const restoreOriginalUri = (
    _oktaAuth: OktaAuth,
    originalUri: string
  ): void => {
    window.location.replace(
      toRelativeUrl(
        originalUri !== '' ? originalUri : '/',
        window.location.origin
      )
    )
  }

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
          <AppRoutes />
        </Security>
      </BrowserRouter>
    </>
  )
}

export default App
