
import { MyArticleDataAction, MyArticleDataActionTypes, MyArticleDataState } from "../../types/MyArticlesData";

const initialState: MyArticleDataState = {
  data: {
    data: []
  },


  limit: 10,
  page: 1,
  loading: false,
  error: null
}

export const MyArticleDataReducer = (state = initialState, action: MyArticleDataAction): MyArticleDataState => {
  switch (action.type) {
    case MyArticleDataActionTypes.FETCH_MY_ARTICLE_DATA:
      return { ...state, loading: true, error: null, data: initialState.data };

    case MyArticleDataActionTypes.FETCH_MY_ARTICLE_DATA_SUCCESS:

      return { ...state, loading: false, error: null, data: action.payload }
    case MyArticleDataActionTypes.FETCH_MY_ARTICLE_DATA_ERROR:
      return { ...state, loading: false, error: action.payload, data: initialState.data };
    case MyArticleDataActionTypes.SET_MY_ARTICLE_DATA_PAGE:
      return { ...state, page: action.payload }
    default:
      return state;
  }
};
