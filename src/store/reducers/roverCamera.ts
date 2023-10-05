
//import { RoversAction, RoversActionTypes, RoversState } from "../../types/sattelities";
//import { RoversState, RoversAction, RoversActionTypes } from "../../types/rovers";
import { RoverCameraState, RoverCameraAction, RoverCameraActionTypes } from "../../types/roverCamera";
const initialState: RoverCameraState= {
    data: {
        photos: [
            {
                id: 0,
                sol:0 ,
                camera: {
                    id: 0 ,
                    name:   "",
                    rover_id:0  ,
                    full_name: ""
                },
                img_src:  "" ,
                earth_date: "" ,
                rover: {
                    id: 0 ,
                    name:   "",
                    landing_date:  "" ,
                    launch_date:  "" ,
                    status:  "" ,
                    max_sol: 0 ,
                    max_date: ""  ,
                    total_photos: 0 ,
                    cameras:[]
                }
            }
        ]
      
    },
   limit: 10,
  page: 1,
    loading: false,
    error: null
}

export const RoverCameraReducer = (state = initialState, action: RoverCameraAction): RoverCameraState => {
    switch (action.type) {
      case RoverCameraActionTypes.FETCH_ROVER_CAMERA:
        return { ...state, loading: true, error: null, data: initialState.data };
  
      case RoverCameraActionTypes.FETCH_ROVER_CAMERA_SUCCESS:
     
  return {...state, loading: false, error: null, data: action.payload}
      case RoverCameraActionTypes.FETCH_ROVER_CAMERA_ERROR:
        return { ...state, loading: false, error: action.payload, data: initialState.data };
        case RoverCameraActionTypes.SET_ROVER_CAMERA_PAGE:
          return {...state, page: action.payload}
      default:
        return state;
    }
  };
  
 
