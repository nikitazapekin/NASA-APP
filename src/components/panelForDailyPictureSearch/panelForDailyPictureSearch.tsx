
import "./panelForDailyPictureSearch.scss"
import Calendar from "../../asserts/calendar.png"
interface PanelForDailyPictureSearchProps {
    isClicked: boolean,
    setIsClicked:  React.Dispatch<React.SetStateAction<boolean>>,
    isClickedMonth: boolean,
    setIsClickedMonth:  React.Dispatch<React.SetStateAction<boolean>>;
        }
        
const PanelForDailyPictureSearch =({isClicked, setIsClicked, setIsClickedMonth}: PanelForDailyPictureSearchProps)=> {
    return  (
        <div className="panelForDailyPictureSearch">
        <button onClick={()=>setIsClicked(true)} className="buttonThatAllowsToSearchByDate">Search by date</button>
        <div onClick={()=> setIsClickedMonth(true)} className="buttonThatAllowsToSearchByMonth">Search by month</div>
        </div>
    )
}
export default PanelForDailyPictureSearch