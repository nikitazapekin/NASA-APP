
import { Dispatch } from "redux"
import { SetUserLogoAction, SetUserLogoActionTypes } from "../../types/setUserPhoto"
import axios from "axios"
import { response } from "express"
interface UrlProps {
    token: string,
    url: string
}
export const fetchSetUserLogo = ({ token, url }: UrlProps) => {
    return async (dispatch: Dispatch<SetUserLogoAction>) => {
        try {
            dispatch({ type: SetUserLogoActionTypes.FETCH_SET_USER_LOGO })
            console.log("token" + JSON.stringify(token), "URL" + url)
            const response = await axios.put('/api/set/logo', { token: token, url: url })
            console.log(response)
            setTimeout(() => {
                dispatch({ type: SetUserLogoActionTypes.FETCH_SET_USER_LOGO_SUCCESS, payload: response.data })
            }, 500)
        } catch (e) {
            dispatch({ type: SetUserLogoActionTypes.FETCH_SET_USER_LOGO_ERROR, payload: 'errorrr' })
        }
    }
}  
