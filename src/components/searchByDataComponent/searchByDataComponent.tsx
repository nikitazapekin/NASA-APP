
import SearchByDayOption from "./searchByDayOption";
import SearchByMonthOption from "./searchByMonthOption";
import SearchByYearOption from "./searchByYearOption";
import "./searchByDataComponent.scss";
import { useActions } from "../../hooks/useActions";
import { useState } from "react";
import { months } from "../../utils/month";
interface TodaysPictureProps {
  isClicked: boolean,
  setIsClicked:  React.Dispatch<React.SetStateAction<boolean>>;
      }
const SearchByDataComponent = ({isClicked, setIsClicked}: TodaysPictureProps) => {
  const {  fetchAllDailyPictures } = useActions();
  const [data, setData] = useState({
    year: "",
    month: "",
    day: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const searchFunction = (event:  React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(data)
    let year=data.year
    let day =data.day
 let month = String(months.indexOf(data.month)+1)
if(month.length==1) {
  month="0"+month
 }
 
 if(day.length==1) {
  day="0"+day
 }
let date=`${year}-${month}-${day}`
   fetchAllDailyPictures(date, date)
  };

  return (
    <form className="searchByDataLine">
      <input
        onChange={handleInputChange}
        name="year"
        value={data.year}
        placeholder="Select year"
        type="text"
        list="yearList"
        autoComplete="off"
        className="searchByDataComponentInput"
      />
      <datalist id="yearList">
        <SearchByYearOption />
      </datalist>
      <input
        onChange={handleInputChange}
        name="month"
        value={data.month}
        placeholder="Select month"
        type="text"
        list="monthList"
        autoComplete="off"
        className="searchByDataComponentInput"
      />
      <datalist id="monthList">
        <SearchByMonthOption />
      </datalist>
      <input
        onChange={handleInputChange}
        name="day"
        value={data.day}
        placeholder="Select day"
        type="text"
        list="dayList"
        autoComplete="off"
        className="searchByDataComponentInput"
      />
      <datalist id="dayList">
        <SearchByDayOption />
      </datalist>
      <button 
      className="searchByDataComponentButton"
      onClick={searchFunction}>Search</button>

    </form>
  );
};

export default SearchByDataComponent;
