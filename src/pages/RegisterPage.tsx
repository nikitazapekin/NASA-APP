import Footer from "../components/footer/footer";
import Navigation from "../components/navigation/navigation";
import RegisterComponent from "../components/registerComponent/registerComponent";
import "./pagesStyles.scss"
interface RegisterProps {
    isAuthenticated: boolean;
}
const RegisterPage = ({ isAuthenticated }: RegisterProps) => {
    return (
        <div className="pageLayout">
            <Navigation isAuthenticated={isAuthenticated} />
            <RegisterComponent />
            <Footer />
        </div>
    )
}
export default RegisterPage