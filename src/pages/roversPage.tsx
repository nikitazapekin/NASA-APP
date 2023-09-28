import Navigation from "../components/navigation/navigation"
import RoversPhotoComponent from "../components/roversPhotoComponent/roversPhotoComponent"
interface RoversProps {
    isAuthenticated: boolean;
  }
  
const RoversPage =({isAuthenticated}: RoversProps)=> {
    return  (
        <>
       <Navigation isAuthenticated={isAuthenticated} /> 
       <RoversPhotoComponent />
        </>
    )
}
export default RoversPage