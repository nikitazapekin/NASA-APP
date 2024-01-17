import Navigation from "../components/navigation/navigation"
import ObjectsNearEarthTable from "../components/objectsNearEarthTable/objectsNearEarthTable"
import "./pagesStyles.scss"
import Footer from "../components/footer/footer"
interface ObjectsNearEarthProps {
    isAuthenticated: boolean;
}
const ObjectsNearEarthPage = ({ isAuthenticated }: ObjectsNearEarthProps) => {
    return (
        <div className="pageLayout">
            <Navigation isAuthenticated={isAuthenticated} />
            <h1 className="objectsNearEarthTitle">
                Impact Risk  оbjects

            </h1>
            <ObjectsNearEarthTable />
            <Footer />
        </div>
    )
}
export default ObjectsNearEarthPage