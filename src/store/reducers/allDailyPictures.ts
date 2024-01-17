
import { UserState, UserActionTypes, UserAction } from "../../types/achievements"
import { AllDailyPicturesState, AllDailyPicturesAction, AllDailyPicturesActionTypes } from "../../types/allDailyPictures"

let date = new Date()
let month = String(date.getMonth() + 1)
let year = String(date.getFullYear())
let day = String(date.getDate())

if (month.length == 1) {
    month = "0" + month
}

if (day.length == 1) {
    day = "0" + day
}
let beforeYear = year
let beforeMonth = Number(month) - 1
if (beforeMonth <= 0) {
    beforeYear = String(Number(beforeYear) - 1)
    beforeMonth = 12
}
let currentDateBefore = `${beforeYear}-${beforeMonth}-${day}`
let currentDate = `${year}-${month}-${day}`
const initialState: AllDailyPicturesState = {
    pictures: [],
    loading: false,
    limitBefore: currentDateBefore,
    limit: currentDate,
    error: null
}
export const allDailyPicturesReducer = (state = initialState, action: AllDailyPicturesAction): AllDailyPicturesState => {
    switch (action.type) {
        case AllDailyPicturesActionTypes.FETCH_ALL_DAILY_PICTURES:
            return { ...state, loading: true, }

        case AllDailyPicturesActionTypes.FETCH_ALL_DAILY_PICTURES_SUCCESS:
            const reversedArray = (action.payload).reverse()
            return { ...state, loading: false, pictures: reversedArray }

        case AllDailyPicturesActionTypes.FETCH_ALL_DAILY_PICTURES_ERROR:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}


