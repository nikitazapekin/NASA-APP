
import { Dispatch } from "redux"
import { RoverAction, RoverActionTypes, RoverState } from "../../types/rover"
import axios from "axios"
export const fetchRover = (id: string) => {
    return async (dispatch: Dispatch<RoverAction>) => {
        try {
            dispatch({ type: RoverActionTypes.FETCH_ROVER })
            const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${id}?api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v`)
            setTimeout(() => {
                dispatch({ type: RoverActionTypes.FETCH_ROVER_SUCCESS, payload: response.data })
            }, 500)
        } catch (e) {
            dispatch({ type: RoverActionTypes.FETCH_ROVER_ERROR, payload: 'errorrr' })
        }
    }
}  
