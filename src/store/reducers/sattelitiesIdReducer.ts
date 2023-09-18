
import { SattelitiesIdState, SattelitiesIdAction, SattelitiesIdActionTypes } from "../../types/sattelititiesId";
const initialState: SattelitiesIdState= {

  data: {
    "@context": "",
    "@id": "",
    "@type":"" ,
    tle: {
        "@id": "",
        "@type":"" ,
        satelliteId: 0 ,
    name: "",
        date:"",
        line1:"" ,
        line2:""
    },
    algorithm:"" ,
    vector: {
        reference_frame:"" ,
        position: {
            x: 0  ,
            y:  0 ,
            z: 0 ,
            r:   0,
            unit: ""
        },
        velocity: {
            x:  0 ,
            y:  0,
            z: 0 ,
            r: 0  ,
            unit: ""
        }
    },
    geodetic: {
        latitude:  0,
        longitude: 0  ,
        altitude:  0 
    },
    parameters: {
        date: "" ,
        satelliteId:  0
    }
},



  /*data: {
        "@context": "",
"@id": "",
"@type": "",
totalItems:0,
member:[]

}, */
   limit: 10,
  page: 1,
    loading: false,
    error: null
}

export const sattelitiesIdReducer = (state = initialState, action: SattelitiesIdAction): SattelitiesIdState => {
    switch (action.type) {
      case SattelitiesIdActionTypes.FETCH_SATTELITIES_ID:
        return { ...state, loading: true, error: null, data: initialState.data };
  
      case SattelitiesIdActionTypes.FETCH_SATTELITIES_ID_SUCCESS:
     
  return {...state, loading: false, error: null, data: action.payload}
      case SattelitiesIdActionTypes.FETCH_SATTELITIES_ID_ERROR:
        return { ...state, loading: false, error: action.payload, data: initialState.data };
        case SattelitiesIdActionTypes.SET_SATTELITIES_ID_PAGE:
          return {...state, page: action.payload}
      default:
        return state;
    }
  };
  