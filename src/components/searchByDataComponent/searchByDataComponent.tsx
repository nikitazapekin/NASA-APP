import SearchByDayOption from "./searchByDayOption"
import SearchByMonthOption from "./searchByMonthOption"
import SearchByYearOption from "./searchByYearOption"
import "./searchByDataComponent.scss"
const SearchByDataComponent =()=> {
    const searchFunction= (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
    }
    return (
        <form className="searchByDataLine">
      <input placeholder="Select year" type="text" list="yearList" autoComplete="off" />
           <datalist id="yearList">
            <SearchByYearOption />
            </datalist> 
            <input placeholder="Select month" type="text" list="monthList"  autoComplete="off"  />
           <datalist id="monthList">
          <SearchByMonthOption />
            </datalist> 
            <input placeholder="Select day" type="text" list="dayList"  autoComplete="off"   />
           <datalist id="dayList">
        <SearchByDayOption />
            </datalist> 
            <button onClick={searchFunction}>Search</button>
        </form>
    )
}
export default  SearchByDataComponent