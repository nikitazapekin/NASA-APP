import React from "react"
import Navigation from "../../components/navigation/navigation"
import "../pagesStyles.scss"
import Footer from "../../components/footer/footer"
import AchievementsBlock from "../../components/achievementsBlock/achievementsBlock"
import { useActions } from "../../hooks/useActions"
import { useEffect } from "react"
import { fetchAchievements } from "../../store/action-creator/achievements"
import { useTypedSelectors } from "../../hooks/useTypedSelectors"
import "./AchievementsPage.scss"
import TodaysPicture from "../../components/todaysPicture/todaysPicture"
const AchievementsPage =()=> {
    const {fetchAchievements, fetchUsers} =useActions()
  // const {pictures, error, loading}=useTypedSelectors(state=> state.achievements)
    useEffect(()=> {
fetchAchievements()
    }, [])
    return (
        <div className="achievementsPage">
        <Navigation />
     <TodaysPicture /> 
   {/*     <Footer /> */}
       
        </div>
    )
}
export default AchievementsPage
//iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v
//https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v
//https://api.nasa.gov/neo/rest/v1/feed?api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v
//https://api.nasa.gov/planetary/apod?start_date=2015-09-07&end_date=2015-09-08&api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v - picture of day