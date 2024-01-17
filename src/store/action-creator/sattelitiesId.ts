
import { Dispatch } from "redux"
import axios from "axios"
import { SattelitiesIdAction, SattelitiesIdActionTypes, SattelitiesIdState } from "../../types/sattelititiesId"
export const fetchSattelitiesId = (id: string | undefined) => {

    return async (dispatch: Dispatch<SattelitiesIdAction>) => {
        try {
            dispatch({ type: SattelitiesIdActionTypes.FETCH_SATTELITIES_ID })
            const response = await axios.get(`https://tle.ivanstanojevic.me/api/tle/${id}/propagate`
            )
            setTimeout(() => {
                dispatch({ type: SattelitiesIdActionTypes.FETCH_SATTELITIES_ID_SUCCESS, payload: response.data })
            }, 500)
        } catch (e) {
            dispatch({ type: SattelitiesIdActionTypes.FETCH_SATTELITIES_ID_ERROR, payload: 'errorrr' })
        }
    }
}

