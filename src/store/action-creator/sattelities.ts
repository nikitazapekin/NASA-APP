
import { Dispatch } from "redux"
import axios from "axios"
import { SattelitiesAction, SattelitiesActionTypes } from "../../types/sattelities"
export const fetchSattelities = (page = 1, limit = 10) => {

    return async (dispatch: Dispatch<SattelitiesAction>) => {
        try {
            dispatch({ type: SattelitiesActionTypes.FETCH_SATTELITIES })
            const response = await axios.get(`https://tle.ivanstanojevic.me/api/tle`
            )
            setTimeout(() => {
                dispatch({ type: SattelitiesActionTypes.FETCH_SATTELITIES_SUCCESS, payload: response.data })
            }, 500)
        } catch (e) {
            dispatch({ type: SattelitiesActionTypes.FETCH_SATTELITIES_ERROR, payload: 'errorrr' })
        }
    }
}

