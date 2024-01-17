

import { Dispatch } from "redux"
import axios from "axios"
import { UserAction, UserActionTypes } from "../../types/achievements"
import { months } from "../../utils/month"
interface fetchPicturesTypes {
    year: string,
    day: string,
    month: string,
}
export const fetchPictures = (data: fetchPicturesTypes) => {
    console.log(data)
    let month = String(months.indexOf(data.month) + 1)
    let date = `${data.year}-${month.length == 1 ? "0" + month : month}-${data.day.length == 1 ? "0" + data.day : data.day}`
    console.log(date)
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_PHOTO })
            const response = await axios.get(`https://api.nasa.gov/planetary/apod?start_date=${date}&end_date=${date}&api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v`)
            setTimeout(() => {
                dispatch({ type: UserActionTypes.FETCH_PHOTO_SUCCESS, payload: response.data })
            }, 500)
        } catch (e) {
            dispatch({ type: UserActionTypes.FETCH_PHOTO_ERROR, payload: 'errorrr' })
        }
    }
}




