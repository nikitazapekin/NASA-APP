import Navigation from "../components/navigation/navigation";
import RegisterComponent from "../components/registerComponent/registerComponent";
import Toast from "../components/toast/toast";
interface RegisterProps {
    isAuthenticated: boolean;
  }
  
const RegisterPage=({isAuthenticated}: RegisterProps)=> {
    return (
        <>
        <Navigation isAuthenticated={isAuthenticated} />
        <RegisterComponent />
        <Toast />
        </>
    )
}
export default RegisterPage