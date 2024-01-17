
import { Dispatch } from "redux"
import axios from "axios"
import { ObjectsNearEarthAction, ObjectsNearEarthActionTypes } from "../../types/objectsNearEarth"
export const fetchObjectsNearEarth = (page = 1, limit = 10) => {

    return async (dispatch: Dispatch<ObjectsNearEarthAction>) => {
        try {
            dispatch({ type: ObjectsNearEarthActionTypes.FETCH_OBJECTS_NEAR_EARTH })
            const response = await axios.get(`https://ssd-api.jpl.nasa.gov/sentry.api`)
            console.log(response)
            setTimeout(() => {
                dispatch({ type: ObjectsNearEarthActionTypes.FETCH_OBJECTS_NEAR_EARTH_SUCCESS, payload: response.data })
            }, 500)
        } catch (e) {
            dispatch({ type: ObjectsNearEarthActionTypes.FETCH_OBJECTS_NEAR_EARTH_ERROR, payload: 'errorrr' })
        }
    }
}
export function setObjectsNearEarthPage(page: number): ObjectsNearEarthAction {
    return { type: ObjectsNearEarthActionTypes.SET_OBJECTS_NEAR_EARTH_PAGE, payload: page }
} 