

import { GetUserFavouritePhotosState, GetUserFavouritePhotosAction, GetUserFavouritePhotosActionTypes } from "../../types/getFavouritePhotos";

const initialState: GetUserFavouritePhotosState = {
  data: {
    data: [
      {

        title: "",
        url: "",
        date: "",
        explanation: ""

      }
    ]
  },

  limit: 10,
  page: 1,
  loading: false,
  error: null
}
export const GetFavouritePhotosReducer = (state = initialState, action: GetUserFavouritePhotosAction): GetUserFavouritePhotosState => {
  switch (action.type) {
    case GetUserFavouritePhotosActionTypes.FETCH_USER_FAVOURITE_PHOTOS:
      return { ...state, loading: true, error: null, data: initialState.data };

    case GetUserFavouritePhotosActionTypes.FETCH_USER_FAVOURITE_PHOTOS_SUCCESS:

      return { ...state, loading: false, error: null, data: action.payload }
    case GetUserFavouritePhotosActionTypes.FETCH_USER_FAVOURITE_PHOTOS_ERROR:
      return { ...state, loading: false, error: action.payload, data: initialState.data };
    case GetUserFavouritePhotosActionTypes.SET_USER_FAVOURITE_PHOTOS_PAGE:
      return { ...state, page: action.payload }
    default:
      return state;
  }
};

//export const  z=0