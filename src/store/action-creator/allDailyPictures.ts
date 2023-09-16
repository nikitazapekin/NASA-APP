
import { Dispatch } from "redux"
import axios from "axios"
import { AllDailyPicturesAction, AllDailyPicturesActionTypes } from "../../types/allDailyPictures"
    export const fetchAllDailyPictures = (limitBefore: string, limit: string)=> {
    return  async (dispatch: Dispatch<AllDailyPicturesAction>)=> {
        try {
            dispatch({type:AllDailyPicturesActionTypes.FETCH_ALL_DAILY_PICTURES})
          const response = await axios.get(`https://api.nasa.gov/planetary/apod?start_date=${limitBefore}&end_date=${limit}&api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v`)
          console.log(response)
            setTimeout(()=> {
                dispatch({type: AllDailyPicturesActionTypes.FETCH_ALL_DAILY_PICTURES_SUCCESS, payload:response.data})
            }, 500)
        } catch(e){
            dispatch({type: AllDailyPicturesActionTypes.FETCH_ALL_DAILY_PICTURES_ERROR, payload: 'errorrr'})
        }
    }
}  




/*

import { Dispatch } from "redux"
import axios from "axios"
import { AllDailyPicturesAction, AllDailyPicturesActionTypes } from "../../types/allDailyPictures"

let currentDate = new Date()
let lastMonth = new Date(currentDate)
lastMonth.setMonth(currentDate.getMonth() - 1)

const formatDate = (date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export const fetchAllDailyPictures = () => {
  const limit = formatDate(currentDate)
  const limitBefore = formatDate(lastMonth)

  return async (dispatch: Dispatch<AllDailyPicturesAction>) => {
    try {
      dispatch({ type: AllDailyPicturesActionTypes.FETCH_ALL_DAILY_PICTURES })
      console.log(limitBefore, limit)
      const response = await axios.get(`https://api.nasa.gov/planetary/apod?start_date=${limitBefore}&end_date=${limit}&api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v`)
      console.log(response)
      setTimeout(() => {
        dispatch({ type: AllDailyPicturesActionTypes.FETCH_ALL_DAILY_PICTURES_SUCCESS, payload: response.data })
      }, 500)
    } catch (e) {
      dispatch({ type: AllDailyPicturesActionTypes.FETCH_ALL_DAILY_PICTURES_ERROR, payload: 'errorrr' })
    }
  }
}
*/
/*
export function setAllDailyPicturesPage(page: number): TodoAction {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}*/