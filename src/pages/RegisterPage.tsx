import Footer from "../components/footer/footer";
import Navigation from "../components/navigation/navigation";
import RegisterComponent from "../components/registerComponent/registerComponent";
import Toast from "../components/toast/toast";
import "./pagesStyles.scss"
interface RegisterProps {
    isAuthenticated: boolean;
  }
  
const RegisterPage=({isAuthenticated}: RegisterProps)=> {
    return (
        <div className="pageLayout">
        <Navigation isAuthenticated={isAuthenticated} />
        <RegisterComponent />
        <Toast />
        <Footer />
        </div>
    )
}
export default RegisterPage