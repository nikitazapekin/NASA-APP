
import { SattelitiesAction, SattelitiesActionTypes, SattelitiesState } from "../../types/sattelities";
const initialState: SattelitiesState= {
  data: {
   // payload: {
        "@context": "",
"@id": "",
"@type": "",
totalItems:0,
member:[]

},
   limit: 10,
  page: 1,
    loading: false,
    error: null
}

export const sattelitiesReducer = (state = initialState, action: SattelitiesAction): SattelitiesState => {
    switch (action.type) {
      case SattelitiesActionTypes.FETCH_SATTELITIES:
        return { ...state, loading: true, error: null, data: initialState.data };
  
      case SattelitiesActionTypes.FETCH_SATTELITIES_SUCCESS:
     
  return {...state, loading: false, error: null, data: action.payload}
      case SattelitiesActionTypes.FETCH_SATTELITIES_ERROR:
        return { ...state, loading: false, error: action.payload, data: initialState.data };
        case SattelitiesActionTypes.SET_SATTELITIES_PAGE:
          return {...state, page: action.payload}
      default:
        return state;
    }
  };
  
 
