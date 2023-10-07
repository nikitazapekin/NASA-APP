import * as UserActionCreators from "./user"
import * as TodoActionCreators from "./todo"
import * as AchievementsActionCreator from "./pictures"
import * as AllDailyPictures from "./allDailyPictures"
import  * as ObjectsNearEarthCreator from "./objectsNearEarth"
import * as SattelitiesCreator from "./sattelities"
import * as SattelitiesIdCreator from "./sattelitiesId"
import * as RoversCreator from "./rovers"
import * as RoverCreator from "./rover"
import * as RoverCameraCreator from "./roverCamera"
import * as NasaDatabaseCreator from "./nasaDatabase"
export default {
    ...TodoActionCreators,
    ...UserActionCreators,
    ...AchievementsActionCreator,
    ...AllDailyPictures,
    ...ObjectsNearEarthCreator, 
    ...SattelitiesCreator, 
    ...SattelitiesIdCreator,
    ...RoversCreator,
    ...RoverCreator,
    ...RoverCameraCreator,
    ...NasaDatabaseCreator
}