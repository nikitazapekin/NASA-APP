
import { Dispatch } from "redux"
//import NasaData
import { GetSubscribtionsAction, GetSubscribtionsActionTypes } from "../../types/getSubscribtions"
//import { RoverCameraActionTypes, RoverCameraAction } from "../../types/roverCamera"
import axios from "axios"
import { response } from "express"
    export const fetchSubscribtions = (token: string)=> {
    return  async (dispatch: Dispatch<GetSubscribtionsAction>)=> {
        try {
  
            dispatch({type:GetSubscribtionsActionTypes.FETCH_USER_SUBSCRIBTIONS})
    
     console.log("AACTS")
       const response =await  axios.post('/api/set/getUserSubscribtions', {token: token })
       console.log("Thsi is response "+JSON.stringify(response))
       setTimeout(()=> {
         dispatch({type: GetSubscribtionsActionTypes.FETCH_USER_SUBSCRIBTIONS_SUCCESS, payload:response.data})
        }, 500)
  //    }
        } catch(e){
            dispatch({type: GetSubscribtionsActionTypes.FETCH_USER_SUBSCRIBTIONS_ERROR, payload: 'errorrr'})
        }
    }
}  