
//import { UserState, UserActionTypes, UserAction } from "../../types/achievements"
import { ObjectsNearEarthAction, ObjectsNearEarthState , ObjectsNearEarthActionTypes } from "../../types/objectsNearEarth"
const initialState: ObjectsNearEarthState= {
   
  data: {
    signature: {
        version: "",
        source: ""
    }, 
    count: "",
    data: [
        {
            h:"" ,
            last_obs:"" ,
            ps_max: "",
            ip: "",
            id:"" ,
            n_imp: 0,
            des: "",
            v_inf:"" ,
            fullname:"" ,
            last_obs_jd:"",
            ts_max: "",
            ps_cum: "",
            diameter:"" ,
            range: ""
        }
    ]
  },
    loading: false,
    error: null
}

export const objectsNearEarthReducer = (state = initialState, action: ObjectsNearEarthAction): ObjectsNearEarthState => {
    switch (action.type) {
      case ObjectsNearEarthActionTypes.FETCH_OBJECTS_NEAR_EARTH:
        return { ...state, loading: true, error: null, data: initialState.data };
  
      case ObjectsNearEarthActionTypes.FETCH_OBJECTS_NEAR_EARTH_SUCCESS:
        return { ...state, loading: false, error: null, data:   action.payload };
  
      case ObjectsNearEarthActionTypes.FETCH_OBJECTS_NEAR_EARTH_ERROR:
        return { ...state, loading: false, error: action.payload, data: initialState.data };
  
      default:
        return state;
    }
  };
  
 