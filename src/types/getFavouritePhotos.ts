
export enum GetUserFavouritePhotosActionTypes {
    FETCH_USER_FAVOURITE_PHOTOS='FETCH_USER_FAVOURITE_PHOTOS',
    FETCH_USER_FAVOURITE_PHOTOS_SUCCESS='FETCH_USER_FAVOURITE_PHOTOS_SUCCESS',
    FETCH_USER_FAVOURITE_PHOTOS_ERROR='FETCH_USER_FAVOURITE_PHOTOS_ERROR',
    SET_USER_FAVOURITE_PHOTOS_PAGE = 'SET_USER_FAVOURITE_PHOTOS_PAGE'
}
interface FetchGetUserFavouritePhotosAction {
    type: GetUserFavouritePhotosActionTypes.FETCH_USER_FAVOURITE_PHOTOS
}
export interface GetUserFavouritePhotos {
    name: string,
    fullname: string
  }
  // const  {token, title, url, date, explanation } =req.body
interface FetchGetUserFavouritePhotosSuccessAction {
    type: GetUserFavouritePhotosActionTypes.FETCH_USER_FAVOURITE_PHOTOS_SUCCESS;
    payload: {
        data: Array<{

            title: string,
            url: string,
            date: string,
            explanation: string
        }>
    }
  }
interface FetchGetUserFavouritePhotosErrorAction {
    type: GetUserFavouritePhotosActionTypes.FETCH_USER_FAVOURITE_PHOTOS_ERROR;
    payload: string;
}
interface SetGetUserFavouritePhotosPage {
  type: GetUserFavouritePhotosActionTypes.SET_USER_FAVOURITE_PHOTOS_PAGE;
  payload: number;
}


export interface GetUserFavouritePhotosState {
data: {
    data: Array<{
        title: string,
        url: string,
        date: string,
        explanation: string
        
    }>
    }
    loading: boolean;
    error: null | string;
    page: number;
    limit: number
  }
 

export type GetUserFavouritePhotosAction = FetchGetUserFavouritePhotosAction | FetchGetUserFavouritePhotosErrorAction | FetchGetUserFavouritePhotosSuccessAction | SetGetUserFavouritePhotosPage 