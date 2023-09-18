
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


   /* "@id": string;
    "@type": string;
    satelliteId: number;
    name: string;
    date: string;
    line1: string;
    line2: string; */
  }
interface FetchSattelitiesIdSuccessAction {
    type: SattelitiesIdActionTypes.FETCH_SATTELITIES_ID_SUCCESS;



    
payload: {
    "@context": string,
    "@id": string,
    "@type":string ,
    tle: {
        "@id": string,
        "@type":string ,
        satelliteId: number ,
    name: string,
        date:string,
        line1:string ,
        line2:string
    },
    algorithm:string ,
    vector: {
        reference_frame:string ,
        position: {
            x: number  ,
            y:  number ,
            z: number ,
            r:   number,
            unit: string
        },
        velocity: {
            x:  number ,
            y:  number,
            z: number ,
            r: number  ,
            unit: string
        }
    },
    geodetic: {
        latitude:  number,
        longitude: number  ,
        altitude:  number 
    },
    parameters: {
        date: string ,
        satelliteId:  number
    }
}


   /* payload: {
        "@context": string;
"@id": string;
"@type": string;
totalItems: number;
member: SatelliteId[]; 
    } */
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
    "@type":string ,
    tle: {
        "@id": string,
        "@type":string ,
        satelliteId: number ,
    name: string,
        date:string,
        line1:string ,
        line2:string
    },
    algorithm:string ,
    vector: {
        reference_frame:string ,
        position: {
            x: number  ,
            y:  number ,
            z: number ,
            r:   number,
            unit: string
        },
        velocity: {
            x:  number ,
            y:  number,
            z: number ,
            r: number  ,
            unit: string
        }
    },
    geodetic: {
        latitude:  number,
        longitude: number  ,
        altitude:  number 
    },
    parameters: {
        date: string ,
        satelliteId:  number
    }
},
loading: boolean;
error: null | string;
page: number;
limit: number



}









 /*   data: {
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
 */
/*
{
    "@context": "https://www.w3.org/ns/hydra/context.jsonld",
    "@id": "https://tle.ivanstanojevic.me/api/tle/25544/propagate?date=2023-09-18T07:51:06%2B00:00",
    "@type": "SatellitePropagationResult",
    "tle": {
        "@id": "https://tle.ivanstanojevic.me/api/tle/25544",
        "@type": "Tle",
        "satelliteId": 25544,
        "name": "ISS (ZARYA)",
        "date": "2023-09-17T08:21:14+00:00",
        "line1": "1 25544U 98067A   23260.34808469  .00013740  00000+0  25395-3 0  9996",
        "line2": "2 25544  51.6410 232.0124 0005832  28.1553 120.1076 15.49346510416089"
    },
    "algorithm": "SGP4",
    "vector": {
        "reference_frame": "ECI",
        "position": {
            "x": 2198.3743405408886,
            "y": 5749.097650765934,
            "z": -2899.8921726623594,
            "r": 6803.995014126582,
            "unit": "km"
        },
        "velocity": {
            "x": -5.748447686521069,
            "y": -0.33928513376135583,
            "z": -5.038455735995688,
            "r": 7.651522816423457,
            "unit": "km/s"
        }
    },
    "geodetic": {
        "latitude": -25.366184678069754,
        "longitude": 314.31673458744365,
        "altitude": 429.75919428785255
    },
    "parameters": {
        "date": "2023-09-18T07:51:06+00:00",
        "satelliteId": 25544
    }
}
*/
export type SattelitiesIdAction = FetchSattelitiesIdAction | FetchSattelitiesIdErrorAction | FetchSattelitiesIdSuccessAction | SetSattelitiesIdPage