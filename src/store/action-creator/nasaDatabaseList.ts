
import { Dispatch } from "redux"
import { NasaDatabaseAction, NasaDatabaseActionTypes } from "../../types/nasaDatabaseList"
import axios from "axios"
export const fetchNasaDatabaseList = (input: string) => {
    return async (dispatch: Dispatch<NasaDatabaseAction>) => {
        try {
            dispatch({ type: NasaDatabaseActionTypes.FETCH_NASAA_DATABASE })
            const response = await axios.get(`https://images-api.nasa.gov/search?q=${input}`)
            console.log(response)
            setTimeout(() => {
                dispatch({ type: NasaDatabaseActionTypes.FETCH_NASAA_DATABASE_SUCCESS, payload: response.data })
            }, 500)
        } catch (e) {
            dispatch({ type: NasaDatabaseActionTypes.FETCH_NASAA_DATABASE_ERROR, payload: 'errorrr' })
        }
    }
}  
