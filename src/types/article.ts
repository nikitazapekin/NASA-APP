
export enum ArticleActionTypes {
    FETCH_ARTICLE = 'FETCH_ARTICLE',
    FETCH_ARTICLE_SUCCESS = 'FETCHARTICLE_SUCCESS',
    FETCH_ARTICLE_ERROR = 'FETCHARTICLE_ERROR',
    SET_ARTICLE_PAGE = 'SET_ARTICLE_PAGE'
}
interface FetchArticleAction {
    type: ArticleActionTypes.FETCH_ARTICLE
}
export interface RoverCamera {
    name: string,
    fullname: string
}
interface FetchArticleSuccessAction {
    type: ArticleActionTypes.FETCH_ARTICLE_SUCCESS;
    payload: {
        collection: {
            version: string,
            href: string,
            items: Array<
                // [

                {
                    href: string,



                }>

        }
    }
}
interface FetchArticleErrorAction {
    type: ArticleActionTypes.FETCH_ARTICLE_ERROR;
    payload: string;
}


interface ArticlePage {
    type: ArticleActionTypes.SET_ARTICLE_PAGE;
    payload: number;
}

export interface ArticleState {
    data1: {

        collection: {
            version: string,
            href: string,
            items: Array<
                {
                    href: string,
                }>
            // ]
        }



    },
    loading1: boolean;
    error1: null | string;
    page: number;
    limit: number
}


export type ArticleAction = FetchArticleAction | FetchArticleErrorAction | FetchArticleSuccessAction | ArticlePage