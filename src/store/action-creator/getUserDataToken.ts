
import { Dispatch } from "redux"
import { GetUserDataTokenAction, GetUserDataTokenActionTypes } from "../../types/getUserDataToken"
import axios from "axios"
export const fetchUserDataToken = (token: any) => {
    return async (dispatch: Dispatch<GetUserDataTokenAction>) => {
        try {

            dispatch({ type: GetUserDataTokenActionTypes.FETCH_USER_DATA_TOKEN })
            if (typeof token == "string") {
                const response = await axios.post('/api/auth/loginn', { token: token })
                setTimeout(() => {
                    dispatch({ type: GetUserDataTokenActionTypes.FETCH_USER_DATA_TOKEN_SUCCESS, payload: response.data })
                }, 500)
            }
        } catch (e) {
            dispatch({ type: GetUserDataTokenActionTypes.FETCH_USER_DATA_TOKEN_ERROR, payload: 'errorrr' })
        }
    }
}  