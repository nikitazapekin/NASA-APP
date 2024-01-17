

import { SetUserLogoState, SetUserLogoAction, SetUserLogoActionTypes } from "../../types/setUserPhoto";

const initialState: SetUserLogoState = {
  data: {
    url: "",
    userId: ""

  },

  limit: 10,
  page: 1,
  loading: false,
  error: null
}

export const setUserPhotoReducer = (state = initialState, action: SetUserLogoAction): SetUserLogoState => {
  switch (action.type) {
    case SetUserLogoActionTypes.FETCH_SET_USER_LOGO:
      return { ...state, loading: true, error: null, data: initialState.data };

    case SetUserLogoActionTypes.FETCH_SET_USER_LOGO_SUCCESS:

      return { ...state, loading: false, error: null, data: action.payload }
    case SetUserLogoActionTypes.FETCH_SET_USER_LOGO_ERROR:
      return { ...state, loading: false, error: action.payload, data: initialState.data };
    case SetUserLogoActionTypes.SET_SET_USER_LOGO_PAGE:
      return { ...state, page: action.payload }
    default:
      return state;
  }
};
