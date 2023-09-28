import Navigation from "../components/navigation/navigation"
import ObjectsNearEarthTable from "../components/objectsNearEarthTable/objectsNearEarthTable"
interface ObjectsNearEarthProps {
    isAuthenticated: boolean;
  }
  
const ObjectsNearEarthPage =({isAuthenticated}: ObjectsNearEarthProps)=> {
    return (
        <>
        <Navigation isAuthenticated={isAuthenticated} />
<h1 className="objectsNearEarthTitle">
Impact Risk  оbjects  

</h1>
 <ObjectsNearEarthTable />
        </>
    )
}
export default ObjectsNearEarthPage
//https://ssd-api.jpl.nasa.gov/sentry.api