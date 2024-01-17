import { useParams } from "react-router"
import Navigation from "../navigation/navigation"
import { useTypedSelectors } from "../../hooks/useTypedSelectors";
import "./roverPageItemComponentItemPage.scss"
import Spinner from "../spinner/spinner"
import RoversPhotosComponent from "../roversPhotosComponent/roversPhotosComponent";
import { RoversPageItemProps } from "./Props";
const RoverPageItemComponentItemPage = ({ isAuthenticated }: RoversPageItemProps) => {
  const { loading, data, error } = useTypedSelectors(state => state.RoverCameraReducer)
  const { id, idd } = useParams()
  if (loading) {
    return <Spinner />
  }
  return (
    <>
      <Navigation isAuthenticated={isAuthenticated} />
      <RoversPhotosComponent id={id} idd={idd} />
    </>
  )
}
export default RoverPageItemComponentItemPage
