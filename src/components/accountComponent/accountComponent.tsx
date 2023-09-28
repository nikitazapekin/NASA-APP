import { useParams } from "react-router"
import "./accountComponent.scss"
import AccountComponentItem from "../accountComponentItem/accountComponentItem"
const AccountComponent =()=> {
    const {id, idd} =useParams()
    return  (
        <div className="accountComponent">
<AccountComponentItem  id={id} idd={idd} />
        </div>
    )
}
export default AccountComponent