
export enum SattelitiesIdActionTypes {
    FETCH_SATTELITIES_ID = 'FETCH_SATTELITIES_ID',
    FETCH_SATTELITIES_ID_SUCCESS = 'FETCH_SATTELITIES_ID_SUCCESS',
    FETCH_SATTELITIES_ID_ERROR = 'FETCH_SATTELITIES_ID_ERROR',
    SET_SATTELITIES_ID_PAGE = 'SET_SATTELITIES_ID_PAGE'
}
interface FetchSattelitiesIdAction {
    type: SattelitiesIdActionTypes.FETCH_SATTELITIES_ID
}
interface FetchSattelitiesIdSuccessAction {
    type: SattelitiesIdActionTypes.FETCH_SATTELITIES_ID_SUCCESS;




    payload: {
        "@context": string,
        "@id": string,
        "@type": string,
        tle: {
            "@id": string,
            "@type": string,
            satelliteId: number,
            name: string,
            date: string,
            line1: string,
            line2: string
        },
        algorithm: string,
        vector: {
            reference_frame: string,
            position: {
                x: number,
                y: number,
                z: number,
                r: number,
                unit: string
            },
            velocity: {
                x: number,
                y: number,
                z: number,
                r: number,
                unit: string
            }
        },
        geodetic: {
            latitude: number,
            longitude: number,
            altitude: number
        },
        parameters: {
            date: string,
            satelliteId: number
        }
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
        "@context": string,
        "@id": string,
        "@type": string,
        tle: {
            "@id": string,
            "@type": string,
            satelliteId: number,
            name: string,
            date: string,
            line1: string,
            line2: string
        },
        algorithm: string,
        vector: {
            reference_frame: string,
            position: {
                x: number,
                y: number,
                z: number,
                r: number,
                unit: string
            },
            velocity: {
                x: number,
                y: number,
                z: number,
                r: number,
                unit: string
            }
        },
        geodetic: {
            latitude: number,
            longitude: number,
            altitude: number
        },
        parameters: {
            date: string,
            satelliteId: number
        }
    },
    loading: boolean;
    error: null | string;
    page: number;
    limit: number
}
export type SattelitiesIdAction = FetchSattelitiesIdAction | FetchSattelitiesIdErrorAction | FetchSattelitiesIdSuccessAction | SetSattelitiesIdPage