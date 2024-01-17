
export enum GetUserDataActionTypes {
  FETCH_USER_DATA = 'FETCH_USER_DATA',
  FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS',
  FETCH_USER_DATA_ERROR = 'FETCH_USER_DATA_ERROR',
  SET_USER_DATA_PAGE = 'SET_USER_DATA_PAGE'
}
interface FetchGetUserDataAction {
  type: GetUserDataActionTypes.FETCH_USER_DATA
}
export interface GetUserData {
  name: string,
  fullname: string
}
interface FetchGetUserDataSuccessAction {
  type: GetUserDataActionTypes.FETCH_USER_DATA_SUCCESS;
  payload: {
    //data: {
    firstName: string,
    secondName: string,
    email: string,
    password: string,
    url: string,
    fav: {
      articles: String[],
      photos: String[]
      //  }
    }
  }
}
interface FetchGetUserDataErrorAction {
  type: GetUserDataActionTypes.FETCH_USER_DATA_ERROR;
  payload: string;
}
interface SetGetUserDataPage {
  type: GetUserDataActionTypes.SET_USER_DATA_PAGE;
  payload: number;
}


export interface GetUserDataState {
  data: {





    firstName: string,
    secondName: string,
    email: string,
    password: string,
    url: string,
    fav: {
      articles: String[],
      photos: String[]
      //  }
    }

  }
  loading: boolean;
  error: null | string;
  page: number;
  limit: number
}


export type GetUserDataAction = FetchGetUserDataAction | FetchGetUserDataErrorAction | FetchGetUserDataSuccessAction | SetGetUserDataPage 