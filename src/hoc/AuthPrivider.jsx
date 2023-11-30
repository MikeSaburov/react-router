import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

import React from 'react';

export const AuthPrivider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
