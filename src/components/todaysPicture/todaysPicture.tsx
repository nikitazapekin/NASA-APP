import "./todaysPicture.scss"
import { useTypedSelectors } from "../../hooks/useTypedSelectors"
import { useActions } from "../../hooks/useActions"
import { fetchAchievements } from "../../store/action-creator/achievements"
import { useEffect } from "react"
import TodaysPictureItem from "../todaysPictureItem/todaysPictureItem"
import SearchByDataComponent from "../searchByDataComponent/searchByDataComponent"
const TodaysPicture=()=> {
    const {pictures, error, loading}=useTypedSelectors(state=> state.achievements)
    const {fetchAchievements} =useActions()
    useEffect(()=> {
fetchAchievements()
    }, [ ])
    return  (

        <div className="todaysPicture">
         <SearchByDataComponent />
      {/*      <h1 className="todaysPictureTitle">
             {pictures.length>1 ? 
(
    <>
     Today's astronomy pictures:
    </>
) : 
(
    <>
    Today's astronomy picture:
    </>
)
             }
            </h1> */}
                <button onClick={()=> console.log(pictures)}>ss</button>
{/*{pictures!=undefined && pictures!=null && pictures.map((item, index)=> (
   <TodaysPictureItem key={item.index} item={item} />
))} */}
        </div>

    )
}
export default TodaysPicture