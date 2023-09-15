

import { Dispatch } from "redux"
import axios from "axios"
import { UserAction, UserActionTypes } from "../../types/achievements"

export const fetchAchievements = ()=> {
    return  async (dispatch: Dispatch<UserAction>)=> {
        try {
            dispatch({type: UserActionTypes.FETCH_PHOTO})
            const response = await axios.get('https://api.nasa.gov/planetary/apod?start_date=2015-09-07&end_date=2015-09-14&api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v')
        
      // const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v')
       console.log(response)
            setTimeout(()=> {
                dispatch({type: UserActionTypes.FETCH_PHOTO_SUCCESS, payload:response.data})

            }, 500)
        } catch(e){
            dispatch({type: UserActionTypes.FETCH_PHOTO_ERROR, payload: 'errorrr'})
        }
    }
} 




