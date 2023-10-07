import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";
import { picturesReducer } from "./picturesReducer";
import { allDailyPicturesReducer } from "./allDailyPictures"
import { objectsNearEarthReducer } from "./objectsNearEarth";
import { sattelitiesIdReducer } from "./sattelitiesIdReducer";
import { sattelitiesReducer } from "./sattelitiesReducer";
import { RoversReducer } from "./rovers";
import { RoverReducer } from "./rover";
import { RoverCameraReducer } from "./roverCamera";
import { NasaDatabaseReducer } from "./nasaDatabase";
export const rootReducer = combineReducers({
    user: userReducer,
    achievements: picturesReducer,
todo: todoReducer,
allDailyPicturesReducer: allDailyPicturesReducer,
objectsNearEarthReducer: objectsNearEarthReducer,
 sattelitiesReducer: sattelitiesReducer,
 sattelitiesIdReducer: sattelitiesIdReducer,
 RoversReducer: RoversReducer,
 RoverReducer: RoverReducer,
 RoverCameraReducer: RoverCameraReducer,
 NasaDatabaseReducer: NasaDatabaseReducer
 
 
})
export type RootState = ReturnType<typeof rootReducer>