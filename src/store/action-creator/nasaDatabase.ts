
import { Dispatch } from "redux"
import { NasaDatabaseAction, NasaDatabaseActionTypes } from "../../types/nasaDatabase"
import axios from "axios"
export const fetchNasaDatabase = (input: string) => {
    return async (dispatch: Dispatch<NasaDatabaseAction>) => {
        try {
            dispatch({ type: NasaDatabaseActionTypes.FETCH_NASA_DATABASE })
            const response = await axios.get(`https://images-api.nasa.gov/search?q=${input}`)
            setTimeout(() => {
                dispatch({ type: NasaDatabaseActionTypes.FETCH_NASA_DATABASE_SUCCESS, payload: response.data })
            }, 500)
        } catch (e) {
            dispatch({ type: NasaDatabaseActionTypes.FETCH_NASA_DATABASE_ERROR, payload: 'errorrr' })
        }
    }
}

