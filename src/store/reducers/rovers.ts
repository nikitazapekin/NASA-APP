
//import { RoversAction, RoversActionTypes, RoversState } from "../../types/sattelities";
import { RoversState, RoversAction, RoversActionTypes } from "../../types/rovers";
const initialState: RoversState= {
    data: {
        rovers:  {
            id: 0 ,
            name: "" ,
            landing_date:  "",
            launch_date:  "",
            status:  "",
            max_sol: 0 ,
            max_date:  "",
            total_photos: 0 ,
            cameras: []
        }
    },
   limit: 10,
  page: 1,
    loading: false,
    error: null
}

export const RoversReducer = (state = initialState, action: RoversAction): RoversState => {
    switch (action.type) {
      case RoversActionTypes.FETCH_ROVERS:
        return { ...state, loading: true, error: null, data: initialState.data };
  
      case RoversActionTypes.FETCH_ROVERS_SUCCESS:
     
  return {...state, loading: false, error: null, data: action.payload}
      case RoversActionTypes.FETCH_ROVERS_ERROR:
        return { ...state, loading: false, error: action.payload, data: initialState.data };
        case RoversActionTypes.SET_ROVERS_PAGE:
          return {...state, page: action.payload}
      default:
        return state;
    }
  };
  
 
