
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
    payload: any[];
}
interface FetchObjectsNearEarthErrorAction {
    type: ObjectsNearEarthActionTypes.FETCH_OBJECTS_NEAR_EARTH_ERROR;
    payload: string;
}
export interface ObjectsNearEarthState { // интерфейс состояния
    pictures: any[];
    loading: boolean;
    error: null | string;
} 

export type ObjectsNearEarthAction = FetchObjectsNearEarthAction | FetchObjectsNearEarthErrorAction | FetchObjectsNearEarthSuccessAction