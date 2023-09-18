import { useParams } from "react-router"
import Navigation from "../components/navigation/navigation"
import SattelitiesIdComponent from "../components/sattelitiesIdComponent/sattelitiesIdComponent"

const SattelitiesIdPage =()=> {
    const {id} =useParams()
    return (
        <>
        <Navigation />
        <SattelitiesIdComponent id={id} />
        </>
    )
}
export default SattelitiesIdPage