
import { Dispatch } from "redux"
import { ArticleAction, ArticleActionTypes } from "../../types/article"
import axios from "axios"
export const fetchArticle = (input: string) => {
    return async (dispatch: Dispatch<ArticleAction>) => {
        try {
            dispatch({ type: ArticleActionTypes.FETCH_ARTICLE })

            const response = await axios.get(`https://images-api.nasa.gov/asset/${input}`)
            console.log(response)
            setTimeout(() => {
                dispatch({ type: ArticleActionTypes.FETCH_ARTICLE_SUCCESS, payload: response.data })
            }, 500)
        } catch (e) {
            dispatch({ type: ArticleActionTypes.FETCH_ARTICLE_ERROR, payload: 'errorrr' })
        }
    }
}  
