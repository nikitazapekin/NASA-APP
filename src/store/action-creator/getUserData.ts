
/*import { Dispatch } from "redux"
//import NasaData
import { GetUserDataAction, GetUserDataActionTypes } from "../../types/getUserData"
//import { RoverCameraActionTypes, RoverCameraAction } from "../../types/roverCamera"
import JwtDecode from "../../hooks/jwt-decode.hook"
import axios from "axios"
import { response } from "express"
    export const fetchUserData = ()=> {
    return  async (dispatch: Dispatch<GetUserDataAction>)=> {
        try {
            const { userData } = JwtDecode();
            console.log("Acts")
          //  let token;
            dispatch({type:GetUserDataActionTypes.FETCH_USER_DATA})
      
             //   const response =await  axios.post('/api/auth/loginn',{token: token})
       //      const response =await  axios.post('/api/auth/loginn',{token: ""})
     const response =await  axios.post('/api/auth/login', {email: "wotblitz362@mail.ru", password: "Belorus2010" })
       console.log("RESP"+response)
            setTimeout(()=> {
               dispatch({type: GetUserDataActionTypes.FETCH_USER_DATA_SUCCESS, payload:response.data})
            }, 500)
        } catch(e){
            dispatch({type: GetUserDataActionTypes.FETCH_USER_DATA_ERROR, payload: 'errorrr'})
        }
    }
}  
*/



import { Dispatch } from "redux"
//import NasaData
import { GetUserDataAction, GetUserDataActionTypes } from "../../types/getUserData"
//import { RoverCameraActionTypes, RoverCameraAction } from "../../types/roverCamera"
import axios from "axios"
import { response } from "express"
    export const fetchUserData = (token: any)=> {
    return  async (dispatch: Dispatch<GetUserDataAction>)=> {
        try {
  
            dispatch({type:GetUserDataActionTypes.FETCH_USER_DATA})
    
     console.log("AACTS")
       const response =await  axios.post('/api/auth/login', {email: "wotblitz362@mail.ru", password: "Belorus2010" })
   
   
    // if(typeof token=="string"){

     //const response =await  axios.post('/api/auth/loginn', {token: token})
     //  console.log(response)
       setTimeout(()=> {
         dispatch({type: GetUserDataActionTypes.FETCH_USER_DATA_SUCCESS, payload:response.data})
        }, 500)
  //    }
        } catch(e){
            dispatch({type: GetUserDataActionTypes.FETCH_USER_DATA_ERROR, payload: 'errorrr'})
        }
    }
}  