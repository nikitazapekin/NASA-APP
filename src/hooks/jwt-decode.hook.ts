import { useState, useEffect, useRef } from "react"
import { jwtDecode } from "jwt-decode";
import { loginProps } from "../components/accountComponent/accountProps";
const JwtDecode= ()=> {
    const [userData, setUserData] = useState<loginProps>()
    const token = useRef("")
    const storageName="userData"
    useEffect(() => {
        
        const userDataFromStorage = localStorage.getItem(storageName)
        if (userDataFromStorage) {
         
            setUserData(JSON.parse(userDataFromStorage))
        }
    }, []) 
return {userData}
}
export default JwtDecode








