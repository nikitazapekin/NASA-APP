import RoverPageItemComponent from "../components/RoverPageItemComponent/roverPageItemComponent"
import Navigation from "../components/navigation/navigation"
import { useParams } from "react-router"
const RoversPageItem =()=> {
    const {id} =useParams()
    return (
        <>
        <Navigation />
<RoverPageItemComponent id={id} />
        </>
    )
}
export default RoversPageItem