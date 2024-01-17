
import { Dispatch } from "redux"
import { MyArticleDataAction, MyArticleDataActionTypes, MyArticleDataState } from "../../types/MyArticlesData";
import axios from "axios"
import { response } from "express"
export const fetchMyArticlesData = (token: string) => {
    return async (dispatch: Dispatch<MyArticleDataAction>) => {
        try {
            dispatch({ type: MyArticleDataActionTypes.FETCH_MY_ARTICLE_DATA })
            const response = await axios.post('/api/set/getUserSubscribtions', { token: token });
            setTimeout(() => {
                dispatch({ type: MyArticleDataActionTypes.FETCH_MY_ARTICLE_DATA_SUCCESS, payload: response.data })
            }, 500)
        } catch (e) {
            dispatch({ type: MyArticleDataActionTypes.FETCH_MY_ARTICLE_DATA_ERROR, payload: 'errorrr' })
        }
    }
}  