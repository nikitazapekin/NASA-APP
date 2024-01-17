
export enum SetUserLogoActionTypes {
  FETCH_SET_USER_LOGO = 'FETCH_SET_USER_LOGO',
  FETCH_SET_USER_LOGO_SUCCESS = 'FETCH_SET_USER_LOGO_SUCCESS',
  FETCH_SET_USER_LOGO_ERROR = 'FETCH_SET_USER_LOGO_ERROR',
  SET_SET_USER_LOGO_PAGE = 'SET_SET_USER_LOGO_PAGE'
}
interface FetchSetUserLogoAction {
  type: SetUserLogoActionTypes.FETCH_SET_USER_LOGO
}
export interface SetUserLogo {
  name: string,
  fullname: string
}
interface FetchSetUserLogoSuccessAction {
  type: SetUserLogoActionTypes.FETCH_SET_USER_LOGO_SUCCESS;
  payload: {
    userId: string
    url: string,

  }
}
interface FetchSetUserLogoErrorAction {
  type: SetUserLogoActionTypes.FETCH_SET_USER_LOGO_ERROR;
  payload: string;
}
interface SetSetUserLogoPage {
  type: SetUserLogoActionTypes.SET_SET_USER_LOGO_PAGE;
  payload: number;
}


export interface SetUserLogoState {
  data: {

    url: string,
    userId: string

  }
  loading: boolean;
  error: null | string;
  page: number;
  limit: number
}


export type SetUserLogoAction = FetchSetUserLogoAction | FetchSetUserLogoErrorAction | FetchSetUserLogoSuccessAction | SetSetUserLogoPage 