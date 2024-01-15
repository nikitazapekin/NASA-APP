

import { GetSubscribtionsState, GetSubscribtionsAction, GetSubscribtionsActionTypes } from "../../types/getSubscribtions";

const initialState: GetSubscribtionsState= {
    data: {

  collection: {
    version: "" ,
    href: "",
    items: [

    ]
}
   

    
    },

   limit: 10,
  page: 1,
    loading: false,
    error: null
}

export const GetSubscribtionsReducer = (state = initialState, action: GetSubscribtionsAction): GetSubscribtionsState => {
    switch (action.type) {
      case GetSubscribtionsActionTypes.FETCH_USER_SUBSCRIBTIONS:
        return { ...state, loading: true, error: null, data: initialState.data };
  
      case GetSubscribtionsActionTypes.FETCH_USER_SUBSCRIBTIONS_SUCCESS:
     
  return {...state, loading: false, error: null, data: action.payload}
      case GetSubscribtionsActionTypes.FETCH_USER_SUBSCRIBTIONS_ERROR:
        return { ...state, loading: false, error: action.payload, data: initialState.data };
        case GetSubscribtionsActionTypes.SET_USER_SUBSCRIBTIONS_PAGE:
          return {...state, page: action.payload}
      default:
        return state;
    }
  };
  
//export const  z=0