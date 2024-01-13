import { useParams } from "react-router"
import Navigation from "../components/navigation/navigation"
import SattelitiesIdComponent from "../components/sattelitiesIdComponent/sattelitiesIdComponent"
import "./pagesStyles.scss"
import Footer from "../components/footer/footer";
interface SattelitiesIdProps {
    isAuthenticated: boolean;
  }
  
const SattelitiesIdPage =({isAuthenticated}: SattelitiesIdProps)=> {
    const {id} =useParams()
    return (
        <div className="pageLayout">
        <Navigation isAuthenticated={isAuthenticated} />
        <SattelitiesIdComponent id={id} />
        <Footer />
        </div>
    )
}
export default SattelitiesIdPage