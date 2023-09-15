import * as UserActionCreators from "./user"
import * as TodoActionCreators from "./todo"
import * as AchievementsActionCreator from "./pictures"
export default {
    ...TodoActionCreators,
    ...UserActionCreators,
    ...AchievementsActionCreator
}