



export enum MyArticleDataActionTypes {
    FETCH_MY_ARTICLE_DATA = 'FETCH_MY_ARTICLE_DATA',
    FETCH_MY_ARTICLE_DATA_SUCCESS = 'FETCHMY_ARTICLE_DATA_SUCCESS',
    FETCH_MY_ARTICLE_DATA_ERROR = 'FETCHMY_ARTICLE_DATA_ERROR',
    SET_MY_ARTICLE_DATA_PAGE = 'SET_MY_ARTICLE_DATA_PAGE'
}
interface FetchMyArticleDataAction {
    type: MyArticleDataActionTypes.FETCH_MY_ARTICLE_DATA
}
export interface RoverCamera {
    name: string,
    fullname: string
}
interface FetchMyArticleDataSuccessAction {
    type: MyArticleDataActionTypes.FETCH_MY_ARTICLE_DATA_SUCCESS;
    payload: {
        data: Array<{

            collection: {
                version: string,
                href: string,
                items: Array<
                    // [

                    {
                        href: string,



                        data: Array<{
                            title: string,
                            nasa_id: string,
                            date_created: string,
                            description: string

                        }>



                    }>

            }
        }>
    }
}
interface FetchMyArticleDataErrorAction {
    type: MyArticleDataActionTypes.FETCH_MY_ARTICLE_DATA_ERROR;
    payload: string;
}
interface MyArticleDataPage {
    type: MyArticleDataActionTypes.SET_MY_ARTICLE_DATA_PAGE;
    payload: number;
}
export interface MyArticleDataState {
    data: {
        data: Array<{
            collection: {
                version: string,
                href: string,
                items: Array<
                    {
                        href: string,
                        data: Array<{
                            title: string,
                            nasa_id: string,
                            date_created: string,
                            description: string

                        }>

                    }>
            }

        }>


    },
    loading: boolean;
    error: null | string;
    page: number;
    limit: number
}


export type MyArticleDataAction = FetchMyArticleDataAction | FetchMyArticleDataErrorAction | FetchMyArticleDataSuccessAction | MyArticleDataPage