import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";
import { picturesReducer } from "./picturesReducer";
import { allDailyPicturesReducer } from "./allDailyPictures"
import { objectsNearEarthReducer } from "./objectsNearEarth";
export const rootReducer = combineReducers({
    user: userReducer,
    achievements: picturesReducer,
todo: todoReducer,
allDailyPicturesReducer: allDailyPicturesReducer,
objectsNearEarthReducer: objectsNearEarthReducer
})
export type RootState = ReturnType<typeof rootReducer>