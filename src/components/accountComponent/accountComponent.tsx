
import { useParams } from "react-router"
import "./accountComponent.scss"
import AccountComponentItem from "../accountComponentItem/accountComponentItem"
import { useContext, useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode";
import Footer from "../footer/footer";
import { loginProps } from "./accountProps";
const AccountComponent = () => {
    const storageName = 'userData'
    const { id, idd } = useParams()
    const [userData, setUserData] = useState<loginProps>()
    useEffect(() => {
        const userDataFromStorage = localStorage.getItem(storageName)
        if (userDataFromStorage) {
            setUserData(JSON.parse(userDataFromStorage))
        }
    }, [])
    useEffect(() => {
        if (userData != undefined) {
            if (typeof userData.token == "string") {
                console.log("decode" + JSON.stringify(jwtDecode(userData.token)))
            }
        }
    }, [userData])
    return (
        <div className="accountComponent">

            <AccountComponentItem id={id} idd={idd} />
            <Footer />
        </div>
    )
}

export default AccountComponent
