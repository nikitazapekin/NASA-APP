import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";
import { achievementsReducer } from "./achievementsReducer";
import { fetchAchievements } from "../action-creator/achievements";
export const rootReducer = combineReducers({
    user: userReducer,
    achievements: achievementsReducer,
   // achievements: fetchAchievements,
   // todo: userReducer,
todo: todoReducer
})
export type RootState = ReturnType<typeof rootReducer>