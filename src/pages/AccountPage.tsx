import AccountComponent from "../components/accountComponent/accountComponent"
import Navigation from "../components/navigation/navigation"
interface AccountPageProps {
isAuthenticated: boolean
}
const AccountPage =({isAuthenticated}: AccountPageProps)=> {
    return (
        <>
        <Navigation isAuthenticated={isAuthenticated} />
    <AccountComponent />
        </>
    )
}
export default AccountPage