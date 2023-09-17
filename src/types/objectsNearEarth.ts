
export enum ObjectsNearEarthActionTypes {
    FETCH_OBJECTS_NEAR_EARTH='FETCH_OBJECTS_NEAR_EARTH',
    FETCH_OBJECTS_NEAR_EARTH_SUCCESS='FETCH_OBJECTS_NEAR_EARTH_SUCCESS',
    FETCH_OBJECTS_NEAR_EARTH_ERROR='FETCH_OBJECTS_NEAR_EARTH_ERROR'
}
interface FetchObjectsNearEarthAction {
    type:ObjectsNearEarthActionTypes.FETCH_OBJECTS_NEAR_EARTH
}





interface FetchObjectsNearEarthSuccessAction {
    type: ObjectsNearEarthActionTypes.FETCH_OBJECTS_NEAR_EARTH_SUCCESS;
    payload: {
      signature: {
        version: string;
        source: string;
      };
      count: string;
      data: Array<{
        h: string;
        last_obs: string;
        ps_max: string;
        ip: string;
        id: string;
        n_imp: number;
        des: string;
        v_inf: string;
        fullname: string;
        last_obs_jd: string;
        ts_max: string;
        ps_cum: string;
        diameter: string;
        range: string;
      }>;
    };
  }


interface FetchObjectsNearEarthErrorAction {
    type: ObjectsNearEarthActionTypes.FETCH_OBJECTS_NEAR_EARTH_ERROR;
    payload: string;
}
export interface ObjectsNearEarthState {
    data: {
      signature: {
        version: string;
        source: string;
      };
      count: string;
      data: Array<{
        h: string;
        last_obs: string;
        ps_max: string;
        ip: string;
        id: string;
        n_imp: number;
        des: string;
        v_inf: string;
        fullname: string;
        last_obs_jd: string;
        ts_max: string;
        ps_cum: string;
        diameter: string;
        range: string;
      }>;
    };
    loading: boolean;
    error: null | string;
  }
  

export type ObjectsNearEarthAction = FetchObjectsNearEarthAction | FetchObjectsNearEarthErrorAction | FetchObjectsNearEarthSuccessAction