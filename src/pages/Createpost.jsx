import React from 'react';
import { useAuth } from '../hook/useAuth';
import { useNavigate } from 'react-router-dom';

export const Createpost = () => {
  const { singout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Создать пост</h1>
      <button onClick={() => singout(() => navigate('/', { replace: true }))}>
        Выйти
      </button>
    </div>
  );
};
