import Footer from "../components/footer/footer";
import Navigation from "../components/navigation/navigation"
import RoversPhotoComponent from "../components/roversPhotoComponent/roversPhotoComponent"
import "./pagesStyles.scss"
interface RoversProps {
    isAuthenticated: boolean;
}
const RoversPage = ({ isAuthenticated }: RoversProps) => {
    return (
        <div className="pageLayout">
            <Navigation isAuthenticated={isAuthenticated} />
            <RoversPhotoComponent />
            <Footer />
        </div>
    )
}
export default RoversPage