import Navigation from "../components/navigation/navigation"
import ObjectsNearEarthTable from "../components/objectsNearEarthTable/objectsNearEarthTable"

const ObjectsNearEarthPage =()=> {
    return (
        <>
        <Navigation />
<h1 className="objectsNearEarthTitle">
Impact Risk  оbjects  

</h1>
 <ObjectsNearEarthTable />
        </>
    )
}
export default ObjectsNearEarthPage
//https://ssd-api.jpl.nasa.gov/sentry.api