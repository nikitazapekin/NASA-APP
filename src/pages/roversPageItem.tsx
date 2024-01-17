import RoverPageItemComponent from "../components/RoverPageItemComponent/roverPageItemComponent"
import Navigation from "../components/navigation/navigation"
import { useParams } from "react-router"
import "./pagesStyles.scss"
import Footer from "../components/footer/footer";
interface RoversPageItemProps {
    isAuthenticated: boolean;
}
const RoversPageItem = ({ isAuthenticated }: RoversPageItemProps) => {
    const { id } = useParams()
    return (
        <div className="pageLayout">
            <Navigation isAuthenticated={isAuthenticated} />
            <RoverPageItemComponent id={id} />
            <Footer />
        </div>
    )
}
export default RoversPageItem