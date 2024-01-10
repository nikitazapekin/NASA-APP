

import { GetUserDataState, GetUserDataAction, GetUserDataActionTypes } from "../../types/getUserData";

const initialState: GetUserDataState= {
    data: {

        firstName: "",
        secondName: "",
        email: "",
        password: "",
        url: "",
        fav: {
            articles: [],
            photos:  []
      //  }
    }

    },

   limit: 10,
  page: 1,
    loading: false,
    error: null
}

export const GetUserDataReducer = (state = initialState, action: GetUserDataAction): GetUserDataState => {
    switch (action.type) {
      case GetUserDataActionTypes.FETCH_USER_DATA:
        return { ...state, loading: true, error: null, data: initialState.data };
  
      case GetUserDataActionTypes.FETCH_USER_DATA_SUCCESS:
     
  return {...state, loading: false, error: null, data: action.payload}
      case GetUserDataActionTypes.FETCH_USER_DATA_ERROR:
        return { ...state, loading: false, error: action.payload, data: initialState.data };
        case GetUserDataActionTypes.SET_USER_DATA_PAGE:
          return {...state, page: action.payload}
      default:
        return state;
    }
  };
  
//export const  z=0