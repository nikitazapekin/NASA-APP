import { useParams } from "react-router"
import Navigation from "../components/navigation/navigation"
import SattelitiesIdComponent from "../components/sattelitiesIdComponent/sattelitiesIdComponent"
interface SattelitiesIdProps {
    isAuthenticated: boolean;
  }
  
const SattelitiesIdPage =({isAuthenticated}: SattelitiesIdProps)=> {
    const {id} =useParams()
    return (
        <>
        <Navigation isAuthenticated={isAuthenticated} />
        <SattelitiesIdComponent id={id} />
        </>
    )
}
export default SattelitiesIdPage