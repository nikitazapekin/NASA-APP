/*import { useParams } from "react-router"
import "./accountComponent.scss"
import AccountComponentItem from "../accountComponentItem/accountComponentItem"
import { useContext } from "react"
const AccountComponent =()=> {
    const storageName = 'userData'
  //  const {jwt} = useContext()
    const {id, idd} =useParams()
    return  (
        <div className="accountComponent">
<AccountComponentItem  id={id} idd={idd} />
        </div>
    )
}
export default AccountComponent */


import { useParams } from "react-router"
import "./accountComponent.scss"
import AccountComponentItem from "../accountComponentItem/accountComponentItem"
import { useContext, useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode";
interface loginProps {
    token: string | null,
    id: string | null,
    firstName: string | null,
    secondName: string | null
  } 
const AccountComponent =()=> {
    const storageName = 'userData'
    // const {jwt} = useContext()
    const {id, idd} =useParams()
    const [userData, setUserData] = useState<loginProps>()

    useEffect(() => {
        
        const userDataFromStorage = localStorage.getItem(storageName)
        if (userDataFromStorage) {
         
            setUserData(JSON.parse(userDataFromStorage))
        }
    }, []) 
useEffect(()=> {
console.log("U data" +JSON.stringify(userData))
if(userData!=undefined){

    if(typeof userData.token =="string" ){
        
        console.log("decode" + JSON.stringify(jwtDecode(userData.token)))
    }
}
}, [userData])
    return (
        <div className="accountComponent">
         
            <AccountComponentItem id={id} idd={idd}  />
        </div>
    )
}

export default AccountComponent
