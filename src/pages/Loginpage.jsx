import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../hook/useAuth';

export const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { singin } = useAuth();

  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;

    singin(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" name="username" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
