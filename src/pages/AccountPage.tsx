import AccountComponent from "../components/accountComponent/accountComponent"
import Navigation from "../components/navigation/navigation"
import "./pagesStyles.scss"
interface AccountPageProps {
isAuthenticated: boolean
}
const AccountPage =({isAuthenticated}: AccountPageProps)=> {
    return (
        <div className="pageLayout">
        <Navigation isAuthenticated={isAuthenticated} />
    <AccountComponent />

        </div>
    )
}
export default AccountPage