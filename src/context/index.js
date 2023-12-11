import React, { createContext, useReducer } from 'react';
import { rootReducers, initialState } from './rootReducers';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducers, initialState);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
