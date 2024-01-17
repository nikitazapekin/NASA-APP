
import { Dispatch } from "redux"
import axios from "axios"
import { AllDailyPicturesAction, AllDailyPicturesActionTypes } from "../../types/allDailyPictures"
export const fetchAllDailyPictures = (limitBefore: string, limit: string) => {
    return async (dispatch: Dispatch<AllDailyPicturesAction>) => {
        try {
            dispatch({ type: AllDailyPicturesActionTypes.FETCH_ALL_DAILY_PICTURES })
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



