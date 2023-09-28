import "./accountComponentItem.scss"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
interface  accountComponentItemProps {
    id: string | undefined,
    idd: string | undefined
}
const AccountComponentItem =({id, idd}: accountComponentItemProps)=> {
    const auth = useContext(AuthContext)
    console.log(auth)
    return(
        <div className="accountComponentItem">
<div className="accountComponentItemBar">
    <div className="accountComponentItemBarItem">
        <img src="" alt="logo" className="logoOfUser" />

    </div>
    <div className="accountComponentItemBarItem">
        My data
    </div>
    <div className="accountComponentItemBarItem">
        My friends
    </div>
    <div className="accountComponentItemBarItem">
        My  subscribtions
    </div>
    <div className="accountComponentItemBarItem">
      Exit
    </div>
</div>
        </div>
    )
}
export default AccountComponentItem