
//import { RoversAction, RoversActionTypes, RoversState } from "../../types/sattelities";
//import { RoversState, RoversAction, RoversActionTypes } from "../../types/rovers";
//import { RoverCameraState, RoverCameraAction, RoverCameraActionTypes } from "../../types/roverCamera";
import { NasaDatabaseState, NasaDatabaseAction, NasaDatabaseActionTypes } from "../../types/nasaDatabase";

const initialState: NasaDatabaseState= {
    data: {

        
    collection: {
        version: "" ,
        href: "",
        items: 
        [
         
            {
                href: "" ,
                data: [
                    {
                        center:  "",
                        title: "" ,
                        keywords:[],
                        // [ "STS-127, ELM-ES, SEDA-AP, JEM, ISS"],
                        location:"" ,
                        nasa_id: "" ,
                        date_created: "" ,
                        media_type: "" ,
                        description: ""
                    }
                ],
                links: [ ]
       
            }
        ]
   }
      
    },
   /* data: {
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
      
    }, */
   limit: 10,
  page: 1,
    loading: false,
    error: null
}

export const NasaDatabaseReducer = (state = initialState, action: NasaDatabaseAction): NasaDatabaseState => {
    switch (action.type) {
      case NasaDatabaseActionTypes.FETCH_NASA_DATABASE:
        return { ...state, loading: true, error: null, data: initialState.data };
  
      case NasaDatabaseActionTypes.FETCH_NASA_DATABASE_SUCCESS:
     
  return {...state, loading: false, error: null, data: action.payload}
      case NasaDatabaseActionTypes.FETCH_NASA_DATABASE_ERROR:
        return { ...state, loading: false, error: action.payload, data: initialState.data };
        case NasaDatabaseActionTypes.SET_NASA_DATABASE_PAGE:
          return {...state, page: action.payload}
      default:
        return state;
    }
  };
  