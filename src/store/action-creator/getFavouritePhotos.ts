
import { Dispatch } from "redux"
import { GetUserFavouritePhotosAction, GetUserFavouritePhotosActionTypes } from "../../types/getFavouritePhotos"
import axios from "axios"
import { response } from "express"
export const fetchFavouritePhotos = (token: any) => {
    return async (dispatch: Dispatch<GetUserFavouritePhotosAction>) => {
        try {

            dispatch({ type: GetUserFavouritePhotosActionTypes.FETCH_USER_FAVOURITE_PHOTOS })
            if (typeof token == "string") {
                const response = await axios.post('/api/set/getFavPhoto', { token: token })
                setTimeout(() => {
                    dispatch({ type: GetUserFavouritePhotosActionTypes.FETCH_USER_FAVOURITE_PHOTOS_SUCCESS, payload: response.data })
                }, 500)
            }
        } catch (e) {
            dispatch({ type: GetUserFavouritePhotosActionTypes.FETCH_USER_FAVOURITE_PHOTOS_ERROR, payload: 'errorrr' })
        }
    }
}  