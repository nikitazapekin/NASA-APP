
export enum UserActionTypes {
    FETCH_PHOTO = 'FETCH_USERS',
    FETCH_PHOTO_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_PHOTO_ERROR = 'FETCH_USERS_ERROR'
}
interface FetchUserAction {
    type: UserActionTypes.FETCH_PHOTO
}
interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_PHOTO_SUCCESS;
    payload: any[];
}
interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_PHOTO_ERROR;
    payload: string;
}
export interface UserState { // интерфейс состояния
    pictures: any[];
    loading: boolean;
    error: null | string;
}

export type UserAction = FetchUserAction | FetchUserErrorAction | FetchUserSuccessAction 
