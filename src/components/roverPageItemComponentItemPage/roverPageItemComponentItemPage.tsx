import { useParams } from "react-router"
import Navigation from "../navigation/navigation"

const RoverPageItemComponentItemPage =()=> {
    const {id, idd} =useParams()
    return (
        <>
        <Navigation />
        {id}
        {idd}
        </>
    )
}
export default RoverPageItemComponentItemPage