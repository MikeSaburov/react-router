import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const fromPage = location.state?.from?.pathname || '/';

  return (
    <div>
      <h1>Login page</h1>
      {fromPage}
    </div>
  );
};
