
export enum GetUserDataTokenActionTypes {
    FETCH_USER_DATA_TOKEN='FETCH_USER_DATA_TOKEN',
    FETCH_USER_DATA_TOKEN_SUCCESS='FETCH_USER_DATA_TOKEN_SUCCESS',
    FETCH_USER_DATA_TOKEN_ERROR='FETCH_USER_DATA_TOKEN_ERROR',
    SET_USER_DATA_TOKEN_PAGE = 'SET_USER_DATA_TOKEN_PAGE'
}
interface FetchGetUserDataTokenAction {
    type: GetUserDataTokenActionTypes.FETCH_USER_DATA_TOKEN
}
export interface GetUserDataToken {
    name: string,
    fullname: string
  }
interface FetchGetUserDataTokenSuccessAction {
    type: GetUserDataTokenActionTypes.FETCH_USER_DATA_TOKEN_SUCCESS;
    payload: {
    firstName: string,
    secondName: string,
    email: string,
    password: string,
    url: string,
    fav: {
        articles: String[],
        photos: String[]
}
    }
  }
interface FetchGetUserDataTokenErrorAction {
    type: GetUserDataTokenActionTypes.FETCH_USER_DATA_TOKEN_ERROR;
    payload: string;
}
interface SetGetUserDataTokenPage {
  type: GetUserDataTokenActionTypes.SET_USER_DATA_TOKEN_PAGE;
  payload: number;
}


export interface GetUserDataTokenState {
data: {
    firstName: string,
    secondName: string,
    email: string,
    password: string,
    url: string,
    fav: {
        articles: String[],
        photos: String[]
}
  
}
    loading: boolean;
    error: null | string;
    page: number;
    limit: number
  }
 

export type GetUserDataTokenAction = FetchGetUserDataTokenAction | FetchGetUserDataTokenErrorAction | FetchGetUserDataTokenSuccessAction | SetGetUserDataTokenPage 