
export enum SetUserEmailAndPasswordActionTypes {
  FETCH_SET_USER_EMAIL_AND_PASSWORD = 'FETCH_SET_USER_EMAIL_AND_PASSWORD',
  FETCH_SET_USER_EMAIL_AND_PASSWORD_SUCCESS = 'FETCH_SET_USER_EMAIL_AND_PASSWORD_SUCCESS',
  FETCH_SET_USER_EMAIL_AND_PASSWORD_ERROR = 'FETCH_SET_USER_EMAIL_AND_PASSWORD_ERROR',
  SET_SET_USER_EMAIL_AND_PASSWORD_PAGE = 'SET_SET_USER_EMAIL_AND_PASSWORD_PAGE'
}
interface FetchSetUserEmailAndPasswordAction {
  type: SetUserEmailAndPasswordActionTypes.FETCH_SET_USER_EMAIL_AND_PASSWORD
}
export interface SetUserEmailAndPassword {
  name: string,
  fullname: string
}
interface FetchSetUserEmailAndPasswordSuccessAction {
  type: SetUserEmailAndPasswordActionTypes.FETCH_SET_USER_EMAIL_AND_PASSWORD_SUCCESS;
  payload: {
    email: string
    password: string,

  }
}
interface FetchSetUserEmailAndPasswordErrorAction {
  type: SetUserEmailAndPasswordActionTypes.FETCH_SET_USER_EMAIL_AND_PASSWORD_ERROR;
  payload: string;
}
interface SetSetUserEmailAndPasswordPage {
  type: SetUserEmailAndPasswordActionTypes.SET_SET_USER_EMAIL_AND_PASSWORD_PAGE;
  payload: number;
}


export interface SetUserEmailAndPasswordState {
  data: {

    email: string,
    password: string

  }
  loading: boolean;
  error: null | string;
  page: number;
  limit: number
}


export type SetUserEmailAndPasswordAction = FetchSetUserEmailAndPasswordAction | FetchSetUserEmailAndPasswordErrorAction | FetchSetUserEmailAndPasswordSuccessAction | SetSetUserEmailAndPasswordPage 