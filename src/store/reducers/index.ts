import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";
import { picturesReducer } from "./picturesReducer";
import { allDailyPicturesReducer } from "./allDailyPictures"
export const rootReducer = combineReducers({
    user: userReducer,
    achievements: picturesReducer,
todo: todoReducer,
allDailyPicturesReducer: allDailyPicturesReducer
})
export type RootState = ReturnType<typeof rootReducer>