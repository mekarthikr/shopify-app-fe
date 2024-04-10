import React from 'react';
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import {LoginCallback} from '@okta/okta-react';
import {AuthWrapper} from '../components/AuthWrapper/AuthWrapper';
import {RegisterPage} from '../components/Register/register';

export const AppRoutes: React.FC = () => {
  const navigate = useNavigate();
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
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login/callback' element={<LoginCallback />} />
    </Routes>
  );
};
