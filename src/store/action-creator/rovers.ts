
import { Dispatch } from "redux"
import { RoversActionTypes, RoversAction } from "../../types/rovers"
import axios from "axios"

export const fetchRovers = () => {
    return async (dispatch: Dispatch<RoversAction>) => {
        try {
            dispatch({ type: RoversActionTypes.FETCH_ROVERS })
            const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v`)
            console.log(response)
            setTimeout(() => {
                dispatch({ type: RoversActionTypes.FETCH_ROVERS_SUCCESS, payload: response.data })
            }, 500)
        } catch (e) {
            dispatch({ type: RoversActionTypes.FETCH_ROVERS_ERROR, payload: 'errorrr' })
        }
    }
}  
