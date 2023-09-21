import * as UserActionCreators from "./user"
import * as TodoActionCreators from "./todo"
import * as AchievementsActionCreator from "./pictures"
import * as AllDailyPictures from "./allDailyPictures"
import  * as ObjectsNearEarthCreator from "./objectsNearEarth"
import * as SattelitiesCreator from "./sattelities"
import * as SattelitiesIdCreator from "./sattelitiesId"
import * as RoversCreator from "./rovers"
import * as RoverCreator from "./rover"
export default {
    ...TodoActionCreators,
    ...UserActionCreators,
    ...AchievementsActionCreator,
    ...AllDailyPictures,
    ...ObjectsNearEarthCreator, 
    ...SattelitiesCreator, 
    ...SattelitiesIdCreator,
    ...RoversCreator,
    ...RoverCreator
}