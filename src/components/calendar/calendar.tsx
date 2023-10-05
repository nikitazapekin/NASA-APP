


import React, { useEffect, useState } from "react";
import { format } from "date-fns";  
import CalendarItem from "./calendarItem";
import "./calendar.scss"
const generateCalendar = (startDate: Date, endDate: Date) => {
  const dateArray = [];
  const currentDate = new Date(startDate);  
  while (currentDate <= endDate) {
    dateArray.push(new Date(currentDate)); 
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dateArray;
};
interface CalendarProps {
  setSearchDate: (date: {
    year: number;
    month: number;
    day: number;
  }) => void;
}
const Calendar = ({setSearchDate}: CalendarProps) => {
  const date =new Date()
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear]=useState(date.getFullYear())
  const [clickedItem, setClickedItem] =useState(1)
  const [calendar, setCalendar] = useState<Date[]>([]);
  const [searchValue, setSearchValue] =useState({
    year: year,
    day: clickedItem,
    month: month
  }) 
  useEffect(()=> {
setSearchDate(searchValue)
  }, [searchValue])
  useEffect(() => {
    const startDate = new Date(`${year}-${0 + month}-01`);
    const endDate = new Date(startDate);
    endDate.setMonth(startDate.getMonth() + 1);
    endDate.setDate(0);  
    setCalendar(generateCalendar(startDate, endDate));
  }, [month, year]);

  const incrementMonth = () => {
    if(month!=12){

      setMonth((prev) => prev + 1);
     setSearchValue(prevSearchValue => ({

        ...prevSearchValue,
        month: month+1
      }));
    }
    else {
      setMonth(1)
      setSearchValue(prevSearchValue => ({
        ...prevSearchValue,
        year: year+1,
        month: 1
      }));
      setYear(prev=>prev+1)
    }
    
  };
  const decrementMonth = () => {
    if(month!=1){
      setMonth((prev) => prev - 1);
      setSearchValue(prevSearchValue => ({
        ...prevSearchValue,
        month: month-1
      }));
    } 
    else {
      setMonth(12)
      setYear(prev=>prev-1)
      setSearchValue(prevSearchValue => ({
        ...prevSearchValue,
        year: year-1,
        month:12
      }));
    }
  };

  return (
    <div className="calendar">
      <div className="btnsCalendar">
        <input 
        type="text"
         defaultValue={String(month).length==0 ? 0 + `${month}` : `${month}`} 
         name="month"
         value={month}
          className="calendarMonth" 
          onChange={(event)=> {
            setMonth(Number(event.target.value))
    setSearchValue(prevSearchValue => ({
      ...prevSearchValue,
      month: Number(event.target.value)
    }));
    
          }}
          /> 
        <input type="text" 
  onChange={(event)=> {
    setYear(Number(event.target.value))



    setSearchValue(prevSearchValue => ({
   // setSearchDate(prevSearchValue => ({
      ...prevSearchValue,
    year: Number(event.target.value)
    }));
    
  }}
        defaultValue={year} 
       value={year}
        name="year" 
        className="calendarYear"  /> 
     <button className="btnsCalendarItem" onClick={incrementMonth}>next</button>
        <button onClick={decrementMonth} className="btnsCalendarItem">prev</button> 
      </div>
      <div className="calendarMonthDays">
        {calendar.map((item, index) => (
          <p 
          className={clickedItem== Number(format(item, "dd")) ? 
          'activeDataCalendar' : ''}
          onClick={()=>{
            
            setClickedItem( Number(format(item, "dd")))
            setSearchValue(prevSearchValue => ({
          //  setSearchDate(prevSearchValue => ({
              ...prevSearchValue,
           day: Number(format(item, "dd"))
            }));
          }}
          key={index}>{ format(item, "dd").length==1 ? (format(item, "dd")[1]) : (format(item, "dd")) }
          </p>
        ))}
      </div>
    </div>
    );
};

export default React.memo(Calendar);

    

//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-7-3&camera=fhaz&api_key=iDEMvxHddUvPeuGSIJPzGzRxWWlFxTsWtjz6Wg7v