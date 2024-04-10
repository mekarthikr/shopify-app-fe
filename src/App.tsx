import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {AppRoutes} from './Routes/Routes';
import './App.css';
import {Security} from '@okta/okta-react';
import OktaAuth, {toRelativeUrl} from '@okta/okta-auth-js';
import {OktaConfig} from './service/auth/oktaConfig';

export const App = () => {
  const oktaAuth = new OktaAuth(OktaConfig.oidc);
  // const {oktaAuth} = useOkta();
  const restoreOriginalUri = (
    _oktaAuth: OktaAuth,
    originalUri: string
  ): void => {
    window.location.replace(
      toRelativeUrl(
        originalUri !== '' ? originalUri : '/',
        window.location.origin
      )
    );
  };
  return (
    <BrowserRouter>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        <AppRoutes />
      </Security>
    </BrowserRouter>
  );
};

export default App;
