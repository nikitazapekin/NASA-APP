import RoverPageItemComponent from "../components/RoverPageItemComponent/roverPageItemComponent"
import Navigation from "../components/navigation/navigation"
import { useParams } from "react-router"
interface RoversPageItemProps {
    isAuthenticated: boolean;
  }
  
const RoversPageItem =({isAuthenticated}: RoversPageItemProps)=> {
    const {id} =useParams()
    return (
        <>
        <Navigation isAuthenticated={isAuthenticated} />
<RoverPageItemComponent id={id} />
        </>
    )
}
export default RoversPageItem