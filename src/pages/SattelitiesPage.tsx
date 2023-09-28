import { useEffect } from "react"
import Navigation from "../components/navigation/navigation"
import { useActions } from "../hooks/useActions"
import { useTypedSelectors } from "../hooks/useTypedSelectors"

import FavouriteSattelitiesComponent from "../components/favouriteSattelitiesComponent/favouriteSattelitiesComponent"
import SattelitiesMap from "../components/Map/map"
interface SattelitiesPageProps {
    isAuthenticated: boolean;
  }
  
const SattelitiesPage =({isAuthenticated}: SattelitiesPageProps)=> {
  
    return  (
        <>
        <Navigation  isAuthenticated={isAuthenticated}/>
        <FavouriteSattelitiesComponent />

        </>
    )
}
export default SattelitiesPage

//https://tle.ivanstanojevic.me/api/tle/25544/propagate
//https://tle.ivanstanojevic.me/
//https://tle.ivanstanojevic.me/api/tle
//https://tle.ivanstanojevic.me/#/docs