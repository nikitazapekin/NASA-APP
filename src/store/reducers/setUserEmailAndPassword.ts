

import { SetUserEmailAndPasswordState, SetUserEmailAndPasswordAction, SetUserEmailAndPasswordActionTypes } from "../../types/setUserEmailAndPassword";

const initialState: SetUserEmailAndPasswordState = {
  data: {
    email: "",
    password: "",
  },
  limit: 10,
  page: 1,
  loading: false,
  error: null
}

export const setUserEmailAndPasswordReducer = (state = initialState, action: SetUserEmailAndPasswordAction): SetUserEmailAndPasswordState => {
  switch (action.type) {
    case SetUserEmailAndPasswordActionTypes.FETCH_SET_USER_EMAIL_AND_PASSWORD:
      return { ...state, loading: true, error: null, data: initialState.data };

    case SetUserEmailAndPasswordActionTypes.FETCH_SET_USER_EMAIL_AND_PASSWORD_SUCCESS:

      return { ...state, loading: false, error: null, data: action.payload }
    case SetUserEmailAndPasswordActionTypes.FETCH_SET_USER_EMAIL_AND_PASSWORD_ERROR:
      return { ...state, loading: false, error: action.payload, data: initialState.data };
    case SetUserEmailAndPasswordActionTypes.SET_SET_USER_EMAIL_AND_PASSWORD_PAGE:
      return { ...state, page: action.payload }
    default:
      return state;
  }
};
