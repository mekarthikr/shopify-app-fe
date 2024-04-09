import {toRelativeUrl} from '@okta/okta-auth-js';
import {useOktaAuth} from '@okta/okta-react';
import React, {ReactNode, useEffect} from 'react';

export const AuthWrapper: React.FC<{children: ReactNode}> = ({children}) => {
  const {oktaAuth, authState} = useOktaAuth();

  useEffect(() => {
    if (authState?.isAuthenticated === false) {
      const originalUri = toRelativeUrl(
        window.location.href,
        window.location.origin
      );
      oktaAuth.setOriginalUri(originalUri);
      oktaAuth.signInWithRedirect().catch(() => ({}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oktaAuth, !(authState === null), authState?.isAuthenticated]);
  return <>{children}</>;
};
