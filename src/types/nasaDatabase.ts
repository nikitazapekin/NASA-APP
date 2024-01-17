
export enum NasaDatabaseActionTypes {
    FETCH_NASA_DATABASE = 'FETCH_NASA_DATABASE',
    FETCH_NASA_DATABASE_SUCCESS = 'FETCH_NASA_DATABASE_SUCCESS',
    FETCH_NASA_DATABASE_ERROR = 'FETCH_NASA_DATABASE_ERROR',
    SET_NASA_DATABASE_PAGE = 'SET_NASA_DATABASE_PAGE'
}
interface FetchNasaDatabaseAction {
    type: NasaDatabaseActionTypes.FETCH_NASA_DATABASE
}
export interface RoverCamera {
    name: string,
    fullname: string
}
interface FetchNasaDatabaseSuccessAction {
    type: NasaDatabaseActionTypes.FETCH_NASA_DATABASE_SUCCESS;
    payload: {
        collection: {
            version: string,
            href: string,
            items: Array<
                {
                    href: string,
                    data: Array<{
                        center: string,
                        title: string,
                        keywords: Array<string>

                        location: string,
                        nasa_id: string,
                        date_created: string,
                        media_type: string,
                        description: string
                    }>
                    links: Array<{
                        href: string,
                        rel: string,
                        render: string
                    }>
                }>

        }
    }
}
interface FetchNasaDatabaseErrorAction {
    type: NasaDatabaseActionTypes.FETCH_NASA_DATABASE_ERROR;
    payload: string;
}


interface SetNasaDatabasePage {
    type: NasaDatabaseActionTypes.SET_NASA_DATABASE_PAGE;
    payload: number;
}


export interface NasaDatabaseState {
    data: {

        collection: {
            version: string,
            href: string,
            items: Array<

                {
                    href: string,
                    data: Array<{
                        center: string,
                        title: string,
                        keywords: Array<string>

                        location: string,
                        nasa_id: string,
                        date_created: string,
                        media_type: string,
                        description: string
                    }>
                    links: Array<{
                        href: string,
                        rel: string,
                        render: string
                    }>



                }>
        }



    },
    loading: boolean;
    error: null | string;
    page: number;
    limit: number
}


export type NasaDatabaseAction = FetchNasaDatabaseAction | FetchNasaDatabaseErrorAction | FetchNasaDatabaseSuccessAction | SetNasaDatabasePage