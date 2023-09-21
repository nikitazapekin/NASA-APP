
import { RoverState, RoverAction, RoverActionTypes } from "../../types/rover";
const initialState: RoverState= {
    data: {

        rover:  {
            id:  0,
            name: "" ,
            landing_date:  "",
            launch_date: "",
            status:  "",
            max_sol: 0,
            max_date:  "",
            total_photos: 0,
            cameras: []
        }
    },
   limit: 10,
  page: 1,
    loading: false,
    error: null
}

export const RoverReducer = (state = initialState, action: RoverAction): RoverState => {
    switch (action.type) {
      case RoverActionTypes.FETCH_ROVER:
        return { ...state, loading: true, error: null, data: initialState.data };
  
      case RoverActionTypes.FETCH_ROVER_SUCCESS:
     
  return {...state, loading: false, error: null, data: action.payload}
      case RoverActionTypes.FETCH_ROVER_ERROR:
        return { ...state, loading: false, error: action.payload, data: initialState.data };
        case RoverActionTypes.SET_ROVER_PAGE:
          return {...state, page: action.payload}
      default:
        return state;
    }
  };
  
 