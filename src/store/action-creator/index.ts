import * as UserActionCreators from "./user"
import * as TodoActionCreators from "./todo"
import * as AchievementsActionCreator from "./achievements"
export default {
    ...TodoActionCreators,
    ...UserActionCreators,
    ...AchievementsActionCreator
}