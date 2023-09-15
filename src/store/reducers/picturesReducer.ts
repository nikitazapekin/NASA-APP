
import { UserState, UserActionTypes, UserAction } from "../../types/achievements"
const initialState: UserState= {
    pictures: [],
    loading: false,
    error: null
}
export const picturesReducer= (state=initialState, action: UserAction): UserState=> {
    switch( action.type){
case UserActionTypes.FETCH_PHOTO:
    return {loading: true, error: null, pictures: []}
    case UserActionTypes.FETCH_PHOTO_SUCCESS:
        return {loading: false, error: null, pictures: action.payload}
        case UserActionTypes.FETCH_PHOTO_ERROR:
    return {loading: false, error: action.payload, pictures: []}
    default:
        return state
    }
}









