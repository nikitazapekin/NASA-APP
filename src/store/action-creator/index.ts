import * as UserActionCreators from "./user"
import * as TodoActionCreators from "./todo"
import * as AchievementsActionCreator from "./pictures"
import * as AllDailyPictures from "./allDailyPictures"
import  * as ObjectsNearEarthCreator from "./objectsNearEarth"
import * as SattelitiesCreator from "./sattelities"
import * as SattelitiesIdCreator from "./sattelitiesId"
export default {
    ...TodoActionCreators,
    ...UserActionCreators,
    ...AchievementsActionCreator,
    ...AllDailyPictures,
    ...ObjectsNearEarthCreator, 
    ...SattelitiesCreator, 
    ...SattelitiesIdCreator
}