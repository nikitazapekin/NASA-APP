import * as UserActionCreators from "./user"
import * as TodoActionCreators from "./todo"
import * as AchievementsActionCreator from "./pictures"
import * as AllDailyPictures from "./allDailyPictures"
import  * as ObjectsNearEarthCreator from "./objectsNearEarth"
export default {
    ...TodoActionCreators,
    ...UserActionCreators,
    ...AchievementsActionCreator,
    ...AllDailyPictures,
    ...ObjectsNearEarthCreator
}