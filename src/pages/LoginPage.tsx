import LoginComponent from "../components/loginComponent/loginComponent"
import Navigation from "../components/navigation/navigation"
interface LoginProps {
    isAuthenticated: boolean;
  }
  
const LoginPage =({isAuthenticated}: LoginProps)=> {
    return (
        <>
        <Navigation isAuthenticated={isAuthenticated} />
     <LoginComponent />
        </>
    )
}

export default LoginPage