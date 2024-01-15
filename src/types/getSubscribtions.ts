
export enum GetSubscribtionsActionTypes {
    FETCH_USER_SUBSCRIBTIONS='FETCH_USER_SUBSCRIBTIONS',
    FETCH_USER_SUBSCRIBTIONS_SUCCESS='FETCH_USER_SUBSCRIBTIONS_SUCCESS',
    FETCH_USER_SUBSCRIBTIONS_ERROR='FETCH_USER_SUBSCRIBTIONS_ERROR',
    SET_USER_SUBSCRIBTIONS_PAGE = 'SET_USER_SUBSCRIBTIONS_PAGE'
}
interface FetchGetSubscribtionsAction {
    type: GetSubscribtionsActionTypes.FETCH_USER_SUBSCRIBTIONS
}
export interface GetSubscribtions {
    name: string,
    fullname: string
  }
interface FetchGetSubscribtionsSuccessAction {
    type: GetSubscribtionsActionTypes.FETCH_USER_SUBSCRIBTIONS_SUCCESS;
    payload: {
        collection: {
          version: string ,
          href: string,
          items: Array<
              {
                  href: string ,
              }>
  }
    }
  }
interface FetchGetSubscribtionsErrorAction {
    type: GetSubscribtionsActionTypes.FETCH_USER_SUBSCRIBTIONS_ERROR;
    payload: string;
}
interface SetGetSubscribtionsPage {
  type: GetSubscribtionsActionTypes.SET_USER_SUBSCRIBTIONS_PAGE;
  payload: number;
}
export interface GetSubscribtionsState {
data: {
    collection: {
      version: string ,
      href: string,
      items: Array<
          {
              href: string ,
          }>

     
  }
   
   
}
    loading: boolean;
    error: null | string;
    page: number;
    limit: number
  }
 

export type GetSubscribtionsAction = FetchGetSubscribtionsAction | FetchGetSubscribtionsErrorAction | FetchGetSubscribtionsSuccessAction | SetGetSubscribtionsPage 