import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>
      <Outlet />
    </>
  );
};
