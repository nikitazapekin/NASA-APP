
import { Dispatch } from "redux"
//import NasaData
import { NasaDatabaseAction, NasaDatabaseActionTypes } from "../../types/nasaDatabaseList"
//import { RoverCameraActionTypes, RoverCameraAction } from "../../types/roverCamera"
import axios from "axios"
    export const fetchNasaDatabaseList = (input: string )=> {
    return  async (dispatch: Dispatch<NasaDatabaseAction>)=> {
        try {
            dispatch({type:NasaDatabaseActionTypes.FETCH_NASAA_DATABASE})
       
       //  const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${id}/photos?earth_date=${String(searchDate.year)}-${String(searchDate.month)}-${String(searchDate.day)}&camera=${idd}&api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v`)
       
       const response = await axios.get(`https://images-api.nasa.gov/search?q=${input}`)
       console.log(response)
            setTimeout(()=> {
               dispatch({type: NasaDatabaseActionTypes.FETCH_NASAA_DATABASE_SUCCESS, payload:response.data})
            }, 500)
        } catch(e){
            dispatch({type: NasaDatabaseActionTypes.FETCH_NASAA_DATABASE_ERROR, payload: 'errorrr'})
        }
    }
}  

//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity?api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v