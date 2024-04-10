import {useOktaAuth} from '@okta/okta-react';
import OktaAuth, {toRelativeUrl} from '@okta/okta-auth-js';

import {OktaConfig} from '../service/auth/oktaConfig';

export const useOkta = () => {
  const oktaAuthBase = new OktaAuth(OktaConfig.oidc);

  const {oktaAuth, authState} = useOktaAuth();

  const login = () => {
    if (authState?.isAuthenticated === false) {
      const originalUri = toRelativeUrl(
        window.location.href,
        window.location.origin
      );
      oktaAuth.setOriginalUri(originalUri);
      oktaAuth.signInWithRedirect();
    }
  };

  return {
    oktaAuth: oktaAuthBase,
    authenticated: authState?.isAuthenticated,
    triggreLogin: login,
  };
};
