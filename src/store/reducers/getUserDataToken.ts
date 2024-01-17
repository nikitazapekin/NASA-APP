

import { GetUserDataTokenState, GetUserDataTokenAction, GetUserDataTokenActionTypes } from "../../types/getUserDataToken";

const initialState: GetUserDataTokenState = {
  data: {

    firstName: "",
    secondName: "",
    email: "",
    password: "",
    url: "",
    fav: {
      articles: [],
      photos: []
    }

  },

  limit: 10,
  page: 1,
  loading: false,
  error: null
}

export const GetUserDataTokenReducer = (state = initialState, action: GetUserDataTokenAction): GetUserDataTokenState => {
  switch (action.type) {
    case GetUserDataTokenActionTypes.FETCH_USER_DATA_TOKEN:
      return { ...state, loading: true, error: null, data: initialState.data };

    case GetUserDataTokenActionTypes.FETCH_USER_DATA_TOKEN_SUCCESS:

      return { ...state, loading: false, error: null, data: action.payload }
    case GetUserDataTokenActionTypes.FETCH_USER_DATA_TOKEN_ERROR:
      return { ...state, loading: false, error: action.payload, data: initialState.data };
    case GetUserDataTokenActionTypes.SET_USER_DATA_TOKEN_PAGE:
      return { ...state, page: action.payload }
    default:
      return state;
  }
};
