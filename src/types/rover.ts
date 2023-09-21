
export enum RoverActionTypes {
    FETCH_ROVER='FETCH_ROVER',
    FETCH_ROVER_SUCCESS='FETCH_ROVER_SUCCESS',
    FETCH_ROVER_ERROR='FETCH_ROVER_ERROR',
    SET_ROVER_PAGE = 'SET_ROVER_PAGE'
}
interface FetchRoverAction {
    type:RoverActionTypes.FETCH_ROVER
}
export interface Rover {
    name: string,
    fullname: string
  }
interface FetchRoverSuccessAction {
    type: RoverActionTypes.FETCH_ROVER_SUCCESS;


    payload: {



        rover:  {
            id:  number,
            name: string ,
            landing_date:  string,
            launch_date: string,
            status:  string,
            max_sol: number,
            max_date:  string,
            total_photos: number,
            cameras: Rover[]
        }
    }
  }
interface FetchRoverErrorAction {
    type: RoverActionTypes.FETCH_ROVER_ERROR;
    payload: string;
}


interface SetRoverPage {
  type: RoverActionTypes.SET_ROVER_PAGE;
  payload: number;
}


export interface RoverState {
data: {
rover:  {
    id:  number,
    name: string ,
    landing_date:  string,
    launch_date: string,
    status:  string,
    max_sol: number,
    max_date:  string,
    total_photos: number,
    cameras: Array<{name: string,
    fullname: string
    }>
}
}
    loading: boolean;
    error: null | string;
    page: number;
    limit: number
  }
 

export type RoverAction = FetchRoverAction | FetchRoverErrorAction | FetchRoverSuccessAction | SetRoverPage