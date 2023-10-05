
export enum RoverCameraActionTypes {
    FETCH_ROVER_CAMERA='FETCH_ROVER_CAMERA',
    FETCH_ROVER_CAMERA_SUCCESS='FETCH_ROVER_CAMERA_SUCCESS',
    FETCH_ROVER_CAMERA_ERROR='FETCH_ROVER_CAMERA_ERROR',
    SET_ROVER_CAMERA_PAGE = 'SET_ROVER_CAMERA_PAGE'
}
interface FetchRoverCameraAction {
    type:RoverCameraActionTypes.FETCH_ROVER_CAMERA
}
export interface RoverCamera {
    name: string,
    fullname: string
  }
interface FetchRoverCameraSuccessAction {
    type: RoverCameraActionTypes.FETCH_ROVER_CAMERA_SUCCESS;


    payload: {



        photos: [
            {
                id: number,
                sol:number ,
                camera: {
                    id: number ,
                    name:   string,
                    rover_id:number  ,
                    full_name: string 
                },
                img_src:  string ,
                earth_date: string ,
                rover: {
                    id: number ,
                    name:   string,
                    landing_date:  string ,
                    launch_date:  string ,
                    status:  string ,
                    max_sol: number ,
                    max_date: string  ,
                    total_photos: number ,
                    cameras: Array<{
                        name: string,
                        full_name: string
                    }>
                   // cameras: [
                    /*    {
                            "name": "FHAZ",
                            "full_name": */
                }
            }
        ]
      /*  rovers:  {
            id: number ,
            name: string ,
            landing_date:  string,
            launch_date:  string,
            status:  string,
            max_sol:  number,
            max_date:  string,
            total_photos:  number,
            cameras: RoverCamera[]
        } */
    }
  }
interface FetchRoverCameraErrorAction {
    type: RoverCameraActionTypes.FETCH_ROVER_CAMERA_ERROR;
    payload: string;
}


interface SetRoverCameraPage {
  type: RoverCameraActionTypes.SET_ROVER_CAMERA_PAGE;
  payload: number;
}


export interface RoverCameraState {
data: {





   // {
        photos: [
            {
                id: number,
                sol:number ,
                camera: {
                    id: number ,
                    name:   string,
                    rover_id:number  ,
                    full_name: string 
                },
                img_src:  string ,
                earth_date: string ,
                rover: {
                    id: number ,
                    name:   string,
                    landing_date:  string ,
                    launch_date:  string ,
                    status:  string ,
                    max_sol: number ,
                    max_date: string  ,
                    total_photos: number ,
                    cameras: Array<{
                        name: string,
                        full_name: string
                    }>
                   // cameras: [
                    /*    {
                            "name": "FHAZ",
                            "full_name": */
                }
            }
        ]
}
    loading: boolean;
    error: null | string;
    page: number;
    limit: number
  }
 

export type RoverCameraAction = FetchRoverCameraAction | FetchRoverCameraErrorAction | FetchRoverCameraSuccessAction | SetRoverCameraPage 