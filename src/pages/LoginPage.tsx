import Footer from "../components/footer/footer";
import LoginComponent from "../components/loginComponent/loginComponent"
import Navigation from "../components/navigation/navigation"
import "./pagesStyles.scss"
interface LoginProps {
    isAuthenticated: boolean;
  }
  
const LoginPage =({isAuthenticated}: LoginProps)=> {
    return (
        <div className="pageLayout">
        <Navigation isAuthenticated={isAuthenticated} />
     <LoginComponent />
     <Footer />
        </div>
    )
}

export default LoginPage