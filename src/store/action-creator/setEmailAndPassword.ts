
import { Dispatch } from "redux"
//import NasaData
import { SetUserEmailAndPasswordAction, SetUserEmailAndPasswordActionTypes } from "../../types/setUserEmailAndPassword"
import axios from "axios"
import { response } from "express"
interface UrlProps {
    email: string,
    password: string,
}
export const fetchSetEmailAndPassword = ({ email, password }: UrlProps, token: string) => {
    return async (dispatch: Dispatch<SetUserEmailAndPasswordAction>) => {
        try {
            dispatch({ type: SetUserEmailAndPasswordActionTypes.FETCH_SET_USER_EMAIL_AND_PASSWORD })
            const response = await axios.put('/api/set/EmailAndPassword', { email: email, password: password, token: token })
            setTimeout(() => {
                dispatch({ type: SetUserEmailAndPasswordActionTypes.FETCH_SET_USER_EMAIL_AND_PASSWORD_SUCCESS, payload: response.data })
            }, 500)
        } catch (e) {
            dispatch({ type: SetUserEmailAndPasswordActionTypes.FETCH_SET_USER_EMAIL_AND_PASSWORD_ERROR, payload: 'errorrr' })
        }
    }
}  
