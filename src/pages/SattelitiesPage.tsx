import { useEffect } from "react"
import Navigation from "../components/navigation/navigation"
import { useActions } from "../hooks/useActions"
import { useTypedSelectors } from "../hooks/useTypedSelectors"
import "./pagesStyles.scss"
import FavouriteSattelitiesComponent from "../components/favouriteSattelitiesComponent/favouriteSattelitiesComponent"
import SattelitiesMap from "../components/Map/map"
import Footer from "../components/footer/footer"
interface SattelitiesPageProps {
    isAuthenticated: boolean;
}
const SattelitiesPage = ({ isAuthenticated }: SattelitiesPageProps) => {
    return (
        <div className="pageLayout">
            <Navigation isAuthenticated={isAuthenticated} />
            <FavouriteSattelitiesComponent />
            <Footer />
        </div>
    )
}
export default SattelitiesPage
