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
import { NasaDatabaseListReducer } from "./nasaDatabaseList";
import { ArticleReducer } from "./article";
import { GetUserDataReducer } from "./getUserData";
import { setUserPhotoReducer } from "./setUserLogo";
import { setUserEmailAndPasswordReducer } from "./setUserEmailAndPassword";
import { GetUserDataTokenReducer } from "./getUserDataToken";
import { GetFavouritePhotosReducer } from "./getFavouritePhotos";
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
 NasaDatabaseReducer: NasaDatabaseReducer,
 NasaDatabaseListReducer:  NasaDatabaseListReducer,
 ArticleReducer: ArticleReducer,
 GetUserDataReducer: GetUserDataReducer,
 SetUserPhoto: setUserPhotoReducer,
 SetUserEmailAndPassword: setUserEmailAndPasswordReducer,
GetUserDataTokenReducer: GetUserDataTokenReducer,
GetFavouritePhotosReducer: GetFavouritePhotosReducer
 
})
export type RootState = ReturnType<typeof rootReducer>