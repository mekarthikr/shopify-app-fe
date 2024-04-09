import React from 'react';
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import {LoginCallback, useOktaAuth} from '@okta/okta-react';
import {AuthWrapper} from './Router/PrivateRouter';

export const AppRoutes: React.FC = () => {
  const {oktaAuth} = useOktaAuth();
  const navigate = useNavigate();
  console.log(oktaAuth.myaccount.addEmail);
  return (
    <Routes>
      <Route index={true} element={<Navigate to={'/home'} />} />
      <Route
        path='/home'
        element={
          <>
            <h1>Home</h1>{' '}
            <button onClick={() => navigate('/protected')}>
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
      <Route path='/login/callback' element={<LoginCallback />} />
    </Routes>
  );
};
