
import { Dispatch } from "redux"
import { RoverCameraActionTypes, RoverCameraAction } from "../../types/roverCamera"
import axios from "axios"

    export const fetchRoverCamera = (id: string, idd: string)=> {
    return  async (dispatch: Dispatch<RoverCameraAction>)=> {
        try {
            dispatch({type:RoverCameraActionTypes.FETCH_ROVER_CAMERA})
          const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${id}/photos?earth_date=2015-9-3&camera=${idd}&api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v`)
          console.log(response)
            setTimeout(()=> {
                dispatch({type: RoverCameraActionTypes.FETCH_ROVER_CAMERA_SUCCESS, payload:response.data})
            }, 500)
        } catch(e){
            dispatch({type: RoverCameraActionTypes.FETCH_ROVER_CAMERA_ERROR, payload: 'errorrr'})
        }
    }
}  

//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity?api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v