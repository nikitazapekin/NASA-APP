
import "./panelForDailyPictureSearch.scss"
import Calendar from "../../asserts/calendar.png"
import { PanelForDailyPictureSearchProps } from "./Props"
const PanelForDailyPictureSearch = ({ isClicked, setIsClicked, setIsClickedMonth }: PanelForDailyPictureSearchProps) => {
    return (
        <div className="panelForDailyPictureSearch">
            <button onClick={() => setIsClicked(true)} className="buttonThatAllowsToSearchByDate">Search by date</button>
            <div onClick={() => setIsClickedMonth(true)} className="buttonThatAllowsToSearchByMonth">Search by month</div>
        </div>
    )
}
export default PanelForDailyPictureSearch