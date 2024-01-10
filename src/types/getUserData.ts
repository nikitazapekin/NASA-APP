
export enum GetUserDataActionTypes {
    FETCH_USER_DATA='FETCH_USER_DATA',
    FETCH_USER_DATA_SUCCESS='FETCH_USER_DATA_SUCCESS',
    FETCH_USER_DATA_ERROR='FETCH_USER_DATA_ERROR',
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
   // }
     /*   photos: [
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
                    
                }
            }
        ] */
}
    loading: boolean;
    error: null | string;
    page: number;
    limit: number
  }
 

export type GetUserDataAction = FetchGetUserDataAction | FetchGetUserDataErrorAction | FetchGetUserDataSuccessAction | SetGetUserDataPage 