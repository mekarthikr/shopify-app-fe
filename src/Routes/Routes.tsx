import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {LoginCallback, useOktaAuth} from '@okta/okta-react';
import {AuthWrapper} from './Router/PrivateRouter';

export const AppRoutes: React.FC = () => {
  const {oktaAuth} = useOktaAuth();
  console.log(oktaAuth.myaccount.addEmail);
  return (
    <Routes>
      <Route index={true} element={<Navigate to={'/home'} />} />
      <Route
        path='/home'
        element={
          <AuthWrapper>
            <>
              <h1>Home</h1>
            </>
          </AuthWrapper>
        }
      />
      <Route
        path='/protected'
        element={
          <>
            <h1>Protected</h1>
          </>
        }
      />
      <Route path='/login/callback' element={<LoginCallback />} />
    </Routes>
  );
};
