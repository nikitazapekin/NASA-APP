
//import { UserState, UserActionTypes, UserAction } from "../../types/achievements"
import { ObjectsNearEarthAction, ObjectsNearEarthState , ObjectsNearEarthActionTypes } from "../../types/objectsNearEarth"
const initialState: ObjectsNearEarthState= {
    pictures: [],
    loading: false,
    error: null
}
export const objectsNearEarthReducer= (state=initialState, action: ObjectsNearEarthAction):ObjectsNearEarthState=> {
    switch( action.type){
case ObjectsNearEarthActionTypes.FETCH_OBJECTS_NEAR_EARTH:
    return {loading: true, error: null, pictures: []}
    case ObjectsNearEarthActionTypes.FETCH_OBJECTS_NEAR_EARTH_SUCCESS:
        return {loading: false, error: null, pictures: action.payload}
        case ObjectsNearEarthActionTypes.FETCH_OBJECTS_NEAR_EARTH_ERROR:
    return {loading: false, error: action.payload, pictures: []}
    default:
        return state
    }
}


