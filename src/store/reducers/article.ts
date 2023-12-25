

import { ArticleState, ArticleAction, ArticleActionTypes } from "../../types/article";

const initialState: ArticleState= {
    data1: {
    collection: {
        version: "" ,
        href: "",
        items: 
        [
        ]
   }
      
    },

   limit: 10,
  page: 1,
    loading1: false,
    error1: null
}

export const ArticleReducer = (state = initialState, action: ArticleAction): ArticleState => {
    switch (action.type) {
      case ArticleActionTypes.FETCH_ARTICLE:
        return { ...state, loading1: true, error1: null, data1: initialState.data1 };
  
      case ArticleActionTypes.FETCH_ARTICLE_SUCCESS:
     
  return {...state, loading1: false, error1: null, data1: action.payload}
      case ArticleActionTypes.FETCH_ARTICLE_ERROR:
        return { ...state, loading1: false, error1: action.payload, data1: initialState.data1 };
        case ArticleActionTypes.SET_ARTICLE_PAGE:
          return {...state, page: action.payload}
      default:
        return state;
    }
  };
  