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
const AchievementsPage =()=> {
 const [isClicked, setIsClicked] =useState(false)
    return (
        <div className="achievementsPage">
        <Navigation />
<button onClick={()=>setIsClicked(true)} className="buttonThatAllowsToSearchByDate">Search by date</button>
     <TodaysPicture isClicked={isClicked} setIsClicked={setIsClicked} /> 
   {/*   <Footer /> */}
       
        </div>
    )
}
export default AchievementsPage
//iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v
//https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v
//https://api.nasa.gov/neo/rest/v1/feed?api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v
//https://api.nasa.gov/planetary/apod?start_date=2015-09-07&end_date=2015-09-08&api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v - picture of day