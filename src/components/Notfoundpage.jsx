import React from 'react';
import { Link } from 'react-router-dom';

export const Notfoundpage = () => {
  return (
    <div>
      Страница не найдена. Вернуться на
      <Link to="/">Главную</Link>
    </div>
  );
};
