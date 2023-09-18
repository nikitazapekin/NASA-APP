
export enum SattelitiesIdActionTypes {
    FETCH_SATTELITIES_ID='FETCH_SATTELITIES_ID',
    FETCH_SATTELITIES_ID_SUCCESS='FETCH_SATTELITIES_ID_SUCCESS',
    FETCH_SATTELITIES_ID_ERROR='FETCH_SATTELITIES_ID_ERROR',
    SET_SATTELITIES_ID_PAGE = 'SET_SATTELITIES_ID_PAGE'
}
interface FetchSattelitiesIdAction {
    type:SattelitiesIdActionTypes.FETCH_SATTELITIES_ID
}
export interface SatelliteId {
    "@id": string;
    "@type": string;
    satelliteId: number;
    name: string;
    date: string;
    line1: string;
    line2: string;
  }
interface FetchSattelitiesIdSuccessAction {
    type: SattelitiesIdActionTypes.FETCH_SATTELITIES_ID_SUCCESS;


    payload: {
        "@context": string;
"@id": string;
"@type": string;
totalItems: number;
member: SatelliteId[]; 
    }
  }


interface FetchSattelitiesIdErrorAction {
    type: SattelitiesIdActionTypes.FETCH_SATTELITIES_ID_ERROR;
    payload: string;
}


interface SetSattelitiesIdPage {
  type: SattelitiesIdActionTypes.SET_SATTELITIES_ID_PAGE;
  payload: number;
}


export interface SattelitiesIdState {
    data: {
            "@context": string;
    "@id": string;
    "@type": string;
    totalItems: number;
    member: Array<{
        "@id": string;
        "@type": string;
        satelliteId: number;
        name: string;
        date: string;
        line1: string;
        line2: string;
    }>
    }

    loading: boolean;
    error: null | string;
    page: number;
    limit: number
  }
 

export type SattelitiesIdAction = FetchSattelitiesIdAction | FetchSattelitiesIdErrorAction | FetchSattelitiesIdSuccessAction | SetSattelitiesIdPage