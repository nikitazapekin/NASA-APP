
export interface AllDailyPicturesState {
    pictures: any[];
    loading: boolean;
    error: null | string;
   limitBefore: string;
    limit:string;
}
export enum AllDailyPicturesActionTypes  {
    FETCH_ALL_DAILY_PICTURES = "FETCH_ALL_DAILY_PICTURES",
    FETCH_ALL_DAILY_PICTURES_SUCCESS = "FETCH_ALL_DAILY_PICTURES_SUCCESS",
    FETCH_ALL_DAILY_PICTURES_ERROR = "FETCH_ALL_DAILY_PICTURES_ERROR",
    SET_ALL_DAILY_PICTURES_PAGE = 'SET_ALL_DAILY_PICTURES_PAGE'
}
interface FetchAllDailyPicturesAction {
    type: AllDailyPicturesActionTypes.FETCH_ALL_DAILY_PICTURES
}


interface FetchAllDailyPicturesSuccessAction {
    type: AllDailyPicturesActionTypes.FETCH_ALL_DAILY_PICTURES_SUCCESS;
    payload: any[];
}
interface FetchAllDailyPicturesErrorAction {
    type: AllDailyPicturesActionTypes.FETCH_ALL_DAILY_PICTURES_ERROR;
    payload: string;
}
interface SetAllDailyPicturesPage {
    type: AllDailyPicturesActionTypes.SET_ALL_DAILY_PICTURES_PAGE;
    payload: number;
}
export type AllDailyPicturesAction = FetchAllDailyPicturesAction | FetchAllDailyPicturesErrorAction | FetchAllDailyPicturesSuccessAction | SetAllDailyPicturesPage