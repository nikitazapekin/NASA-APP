import React from "react"
import Navigation from "../../components/navigation/navigation"
import "../pagesStyles.scss"
import Footer from "../../components/footer/footer"
import AchievementsBlock from "../../components/achievementsBlock/achievementsBlock"
import { useActions } from "../../hooks/useActions"
import { useEffect } from "react"
import { useTypedSelectors } from "../../hooks/useTypedSelectors"
import "./PicturesPage.scss"
import { useState } from "react"
import TodaysPicture from "../../components/todaysPicture/todaysPicture"
import { AllDailyPicturesActionTypes } from "../../types/allDailyPictures"
import AllDailyPicturesItem from "../../components/allDailyPicturesItem/allDailyPicturesItem"
import PanelForDailyPictureSearch from "../../components/panelForDailyPictureSearch/panelForDailyPictureSearch"
const AchievementsPage =()=> {
 const [isClicked, setIsClicked] =useState(false)
 const [isClickedMonth, setIsClickedMonth]=useState(false)
 const { fetchAllDailyPictures} = useActions();

 const {limitBefore, error, loading,pictures, limit}=useTypedSelectors(state=> state.allDailyPicturesReducer)


useEffect(()=> {
  fetchAllDailyPictures(limitBefore, limit)
      }, [limitBefore])
    return (
        <div className="achievementsPage">
        <Navigation />
<PanelForDailyPictureSearch
 isClicked={isClicked} 
 setIsClicked={setIsClicked} 
 isClickedMonth={isClickedMonth} 
 setIsClickedMonth={setIsClickedMonth}
 />
     <TodaysPicture isClicked={isClicked} setIsClicked={setIsClicked} /> 
    <div>
{pictures.map(item=> (
  <>
<AllDailyPicturesItem item={item} />
  </>
)
    )}

        </div>




<button onClick={()=> {
fetchAllDailyPictures("2022-05-01", "2022-06-01")

}}>
  sss
</button>
        </div>
    )
}
export default AchievementsPage
//iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v
//https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v
//https://api.nasa.gov/neo/rest/v1/feed?api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v
//https://api.nasa.gov/planetary/apod?start_date=2015-09-07&end_date=2015-09-08&api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v - picture of day