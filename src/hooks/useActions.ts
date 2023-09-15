import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
//import *  as  UserActionCreators from "../store/action-creator/user"
import actionCreator from "../store/action-creator"
export const useActions = ()=> {
    const dispatch =useDispatch()
    console.log(actionCreator)
    return bindActionCreators(actionCreator, dispatch)
  //  return bindActionCreators(UserActionCreators, dispatch)
}