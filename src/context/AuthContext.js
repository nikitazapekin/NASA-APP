import {createContext} from 'react'

function noop(token, userId, firstName, secondName) {}

export const AuthContext = createContext({ // получаем настройки аудентификации
  token: null,
  userId: null,
  login: noop,
  logout: noop,
  isAuthenticated: false,
  firstName: null, 
  secondName: null
 
})