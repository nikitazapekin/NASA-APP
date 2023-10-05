import {useState, useCallback, useEffect} from 'react'
import { useNavigate } from 'react-router'
const storageName = 'userData'
interface loginProps {
  jwtToken: string | null,
  id: string | null,
  firstName: string | null,
  secondName: string | null
}
export const useAuth = () => {
  const [token, setToken] = useState<null | string>(null)
  const [ready, setReady] = useState(false)
  const [userId, setUserId] = useState<null | string>(null)
const [firstName, setFirstName] =useState<null | string>(null)
const [secondName, setSecondName] =useState<null | string>(null)

  const login = useCallback((jwtToken: string, id: string, firstName: string, secondName: string) => {
    setToken(jwtToken)
    setUserId(id)
    setFirstName(firstName)
    setSecondName(secondName)
    localStorage.setItem(storageName, JSON.stringify({
      userId: id, token: jwtToken, firstName: firstName, secondName: secondName
    }))
  }, [])


  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    setFirstName(null)
    setSecondName(null)
    localStorage.removeItem(storageName)
  }, [])
/*
  useEffect(() => {
   // if( JSON.parse(localStorage.getItem(storageName))!=null){
    //}

      const data = JSON.parse(localStorage.getItem(storageName))
      if (data && data.token && data.firstName && data.secondName) {
        login(data.token, data.userId, data.firstName, data.secondName)
      }
      setReady(true)
  }, [login])
 */
  useEffect(() => {
    const storedData = localStorage.getItem(storageName);
    if (storedData !== null) {
      const data = JSON.parse(storedData);
      if (data.token && data.firstName && data.secondName) {
        login(data.token, data.userId, data.firstName, data.secondName);
      }
    }
    setReady(true);
  }, [login]);

  return { login, logout, token, userId, ready, firstName, secondName }
}