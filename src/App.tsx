import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRoutes from './utils/routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
function App() {
  const {token, login, logout, userId, firstName, secondName}= useAuth()
  const isAuthenticated = !!token
  return (
  <>
     <AuthContext.Provider value={{
      token: null, login, logout, userId: null, isAuthenticated,  firstName: null, secondName: null
    }}>
   <AppRoutes isAuthenticated={isAuthenticated} /> 
    </AuthContext.Provider>
 </>
  );
}

export default App;
//https://ssd-api.jpl.nasa.gov/doc/sentry.html
//iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v

//Mars Rover Photos
//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=rhaz&api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v&earth_date=2015-6-9
//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-9-3&camera=rhaz&api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v
//https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v