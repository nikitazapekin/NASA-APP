import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRoutes from './utils/routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
function App() {
  const { token, login, logout, userId, firstName, secondName } = useAuth()
  const isAuthenticated = !!token
  return (
    <>
      <AuthContext.Provider value={{
        token: null, login, logout, userId: null, isAuthenticated, firstName: null, secondName: null
      }}>
        <AppRoutes isAuthenticated={isAuthenticated} />
      </AuthContext.Provider>
    </>
  );
}

export default App;
