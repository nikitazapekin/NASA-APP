import "./todaysPicture.scss"
import { useTypedSelectors } from "../../hooks/useTypedSelectors"
import { useActions } from "../../hooks/useActions"
import { fetchPictures } from "../../store/action-creator/pictures"
import { useEffect } from "react"
import TodaysPictureItem from "../todaysPictureItem/todaysPictureItem"
import SearchByDataComponent from "../searchByDataComponent/searchByDataComponent"
const TodaysPicture=()=> {
    const {pictures, error, loading}=useTypedSelectors(state=> state.achievements)
    const {fetchPictures} =useActions()
    useEffect(()=> {
fetchPictures()
    }, [ ])
    return  (

        <div className="todaysPicture">
         <SearchByDataComponent />
     
                <button onClick={()=> console.log(pictures)}>ss</button>
{/*{pictures!=undefined && pictures!=null && pictures.map((item, index)=> (
   <TodaysPictureItem key={item.index} item={item} />
))} */}
        </div>

    )
}
export default TodaysPicture