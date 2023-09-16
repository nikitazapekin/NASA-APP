

import { Dispatch } from "redux"
import axios from "axios"
//import { UserAction, UserActionTypes } from "../../types/achievements"

import { ObjectsNearEarthAction, ObjectsNearEarthActionTypes } from "../../types/objectsNearEarth"
export const fetchObjectsNearEarth = ()=> {
    
    return  async (dispatch: Dispatch<ObjectsNearEarthAction>)=> {
        try {
            dispatch({type: ObjectsNearEarthActionTypes.FETCH_OBJECTS_NEAR_EARTH})
       
       
          const response = await axios.get(`https://ssd-api.jpl.nasa.gov/sentry.api`)
          console.log(response)
            setTimeout(()=> {
                dispatch({type: ObjectsNearEarthActionTypes.FETCH_OBJECTS_NEAR_EARTH_SUCCESS, payload:response.data})
            }, 500)
        } catch(e){
            dispatch({type: ObjectsNearEarthActionTypes.FETCH_OBJECTS_NEAR_EARTH_ERROR, payload: 'errorrr'})
        }
    }
} 

