
export enum RoversActionTypes {
    FETCH_ROVERS='FETCH_ROVERS',
    FETCH_ROVERS_SUCCESS='FETCH_ROVERS_SUCCESS',
    FETCH_ROVERS_ERROR='FETCH_ROVERS_ERROR',
    SET_ROVERS_PAGE = 'SET_ROVERS_PAGE'
}
interface FetchRoversAction {
    type:RoversActionTypes.FETCH_ROVERS
}
export interface Rovers {
    name: string,
    fullname: string
  }
interface FetchRoversSuccessAction {
    type: RoversActionTypes.FETCH_ROVERS_SUCCESS;


    payload: {
        rovers:  {
            id: number ,
            name: string ,
            landing_date:  string,
            launch_date:  string,
            status:  string,
            max_sol:  number,
            max_date:  string,
            total_photos:  number,
            cameras: Rovers[]
        }
    }
  }
interface FetchRoversErrorAction {
    type: RoversActionTypes.FETCH_ROVERS_ERROR;
    payload: string;
}


interface SetRoversPage {
  type: RoversActionTypes.SET_ROVERS_PAGE;
  payload: number;
}


export interface RoversState {
data: {
rovers:  {
    id: number ,
    name: string ,
    landing_date:  string,
    launch_date:  string,
    status:  string,
    max_sol:  number,
    max_date:  string,
    total_photos:  number,
    cameras:  Array<{
        name: string,
        fullname: string
    }> 
}
}
    loading: boolean;
    error: null | string;
    page: number;
    limit: number
  }
 

export type RoversAction = FetchRoversAction | FetchRoversErrorAction | FetchRoversSuccessAction | SetRoversPage