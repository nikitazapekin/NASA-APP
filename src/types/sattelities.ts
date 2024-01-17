
export enum SattelitiesActionTypes {
  FETCH_SATTELITIES = 'FETCH_SATTELITIES',
  FETCH_SATTELITIES_SUCCESS = 'FETCH_SATTELITIES_SUCCESS',
  FETCH_SATTELITIES_ERROR = 'FETCH_SATTELITIES_ERROR',
  SET_SATTELITIES_PAGE = 'SET_SATTELITIES_PAGE'
}
interface FetchSattelitiesAction {
  type: SattelitiesActionTypes.FETCH_SATTELITIES
}
export interface Satellite {
  "@id": string;
  "@type": string;
  satelliteId: number;
  name: string;
  date: string;
  line1: string;
  line2: string;
}
interface FetchSattelitiesSuccessAction {
  type: SattelitiesActionTypes.FETCH_SATTELITIES_SUCCESS;


  payload: {
    "@context": string;
    "@id": string;
    "@type": string;
    totalItems: number;
    member: Satellite[];
  }
}


interface FetchSattelitiesErrorAction {
  type: SattelitiesActionTypes.FETCH_SATTELITIES_ERROR;
  payload: string;
}


interface SetSattelitiesPage {
  type: SattelitiesActionTypes.SET_SATTELITIES_PAGE;
  payload: number;
}


export interface SattelitiesState {
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


export type SattelitiesAction = FetchSattelitiesAction | FetchSattelitiesErrorAction | FetchSattelitiesSuccessAction | SetSattelitiesPage