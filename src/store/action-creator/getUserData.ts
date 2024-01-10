
import { Dispatch } from "redux"
//import NasaData
import { GetUserDataAction, GetUserDataActionTypes } from "../../types/getUserData"
//import { RoverCameraActionTypes, RoverCameraAction } from "../../types/roverCamera"
import axios from "axios"
import { response } from "express"
    export const fetchUserData = ()=> {
    return  async (dispatch: Dispatch<GetUserDataAction>)=> {
        try {
            dispatch({type:GetUserDataActionTypes.FETCH_USER_DATA})
       //   axios.post('/api/auth/login', {email: form.email, password: form.password })
     //  const response = await axios.get(`https://images-api.nasa.gov/asset/${input}`)
     const response =await  axios.post('/api/auth/login', {email: "wotblitz362@mail.ru", password: "Belorus2010" })
       console.log(response)
            setTimeout(()=> {
               dispatch({type: GetUserDataActionTypes.FETCH_USER_DATA_SUCCESS, payload:response.data})
            }, 500)
        } catch(e){
            dispatch({type: GetUserDataActionTypes.FETCH_USER_DATA_ERROR, payload: 'errorrr'})
        }
    }
}  
