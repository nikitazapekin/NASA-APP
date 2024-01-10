import { useActions } from "../../hooks/useActions"
import { useEffect } from "react"
import "./favouriteSattelitiesComponent.scss"
import Spinner from "../spinner/spinner"
import { useTypedSelectors } from "../../hooks/useTypedSelectors"
import FavouriteSattelitiesComponentItem from "../favouriteSattelitiesComponentItem/favouriteSattelitiesComponentItem"

const FavouriteSattelitiesComponent =()=> {
    const {fetchSattelities} =useActions()
    const {data, error, loading}=useTypedSelectors(state=> state.sattelitiesReducer)
    useEffect(()=> {
fetchSattelities()
console.log(data)
    }, [])
    if(loading){
<Spinner />
    }
    return (
        <div className="favouriteSattelitiesComponent">
            <h1 className="recentlyPopularSattelities">Recently popular sattelities</h1>

            <div className="recentlyPopularSattelitiesComponentGrid">
            {data.member.map((item, index)=> (
                <FavouriteSattelitiesComponentItem  item={item} />   
                ))}
                </div>
        </div>
    )
}
export default FavouriteSattelitiesComponent