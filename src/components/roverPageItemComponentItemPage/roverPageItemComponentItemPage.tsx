import { useParams } from "react-router"
import Navigation from "../navigation/navigation"
import { useActions } from "../../hooks/useActions";
import { useTypedSelectors } from "../../hooks/useTypedSelectors";
import { useEffect } from "react";
import "./roverPageItemComponentItemPage.scss"
import Spinner from "../spinner/spinner"
import RoversPhotoComponent from "../roversPhotoComponent/roversPhotoComponent";
import RoversPhotosComponent from "../roversPhotosComponent/roversPhotosComponent";
interface RoversPageItemProps {
  isAuthenticated: boolean;
}
const RoverPageItemComponentItemPage =({isAuthenticated}: RoversPageItemProps)=> {
const {loading, data, error} =useTypedSelectors(state=> state.RoverCameraReducer)
const {fetchRoverCamera} =useActions()
    const {id, idd} =useParams()
    useEffect(()=> {
      if(id!=undefined && idd!=undefined ){

       // fetchRoverCamera(id, idd)
      }
    }, [])
    if(loading){
      return <Spinner />
    }
    return (
      <>
    
      <Navigation  isAuthenticated={isAuthenticated} />
    <RoversPhotosComponent id={id} idd={idd} /> 
      </>
    )
}
export default RoverPageItemComponentItemPage
//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-9-3&camera=rhaz&api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v