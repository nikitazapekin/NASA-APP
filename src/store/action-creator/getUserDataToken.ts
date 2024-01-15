
import { Dispatch } from "redux"
//import NasaData
import { GetUserDataTokenAction, GetUserDataTokenActionTypes } from "../../types/getUserDataToken"
//import { RoverCameraActionTypes, RoverCameraAction } from "../../types/roverCamera"
import axios from "axios"
import { response } from "express"
    export const fetchUserDataToken = (token: any)=> {
    return  async (dispatch: Dispatch<GetUserDataTokenAction>)=> {
        try {
  
            dispatch({type:GetUserDataTokenActionTypes.FETCH_USER_DATA_TOKEN})
    
     console.log("AACTS")
     if(typeof token=="string"){

     const response =await  axios.post('/api/auth/loginn', {token: token})
       console.log(response)
       setTimeout(()=> {
         dispatch({type: GetUserDataTokenActionTypes.FETCH_USER_DATA_TOKEN_SUCCESS, payload:response.data})
        }, 500)
     }
        } catch(e){
            dispatch({type: GetUserDataTokenActionTypes.FETCH_USER_DATA_TOKEN_ERROR, payload: 'errorrr'})
        }
    }
}  