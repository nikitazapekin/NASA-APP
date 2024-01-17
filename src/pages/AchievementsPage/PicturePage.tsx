import React from "react"
import Navigation from "../../components/navigation/navigation"
import "../pagesStyles.scss"
import Footer from "../../components/footer/footer"
import { useActions } from "../../hooks/useActions"
import { useEffect } from "react"
import { useTypedSelectors } from "../../hooks/useTypedSelectors"
import "./PicturesPage.scss"
import { useState } from "react"
import TodaysPicture from "../../components/todaysPicture/todaysPicture"
import { AllDailyPicturesActionTypes } from "../../types/allDailyPictures"
import AllDailyPicturesItem from "../../components/allDailyPicturesItem/allDailyPicturesItem"
import PanelForDailyPictureSearch from "../../components/panelForDailyPictureSearch/panelForDailyPictureSearch"
import Spinner from "../../components/spinner/spinner"

interface AchievementsProps {
  isAuthenticated: boolean;
}
const AchievementsPage = ({ isAuthenticated }: AchievementsProps) => {
  const [isClicked, setIsClicked] = useState(false)
  const [isClickedMonth, setIsClickedMonth] = useState(false)
  const { fetchAllDailyPictures } = useActions();
  const { limitBefore, error, loading, pictures, limit } = useTypedSelectors(state => state.allDailyPicturesReducer)
  useEffect(() => {
    fetchAllDailyPictures(limitBefore, limit)
  }, [limitBefore])
  if (loading) {
    return <Spinner />
  }
  return (
    <div className="achievementsPage">
      <Navigation isAuthenticated={isAuthenticated} />
      <PanelForDailyPictureSearch
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        isClickedMonth={isClickedMonth}
        setIsClickedMonth={setIsClickedMonth}
      />
      <TodaysPicture isClicked={isClicked}
        setIsClicked={setIsClicked}
        setIsClickedMonth={setIsClickedMonth}
        isClickedMonth={isClickedMonth} />
      <div className="allDailyPicturesItems">

        {pictures.map(item => (
          <>
            <AllDailyPicturesItem item={item} />
          </>
        )
        )}
      </div>
      <Footer />
    </div>
  )
}
export default AchievementsPage
