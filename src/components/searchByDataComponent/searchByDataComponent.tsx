
import SearchByDayOption from "./searchByDayOption";
import SearchByMonthOption from "./searchByMonthOption";
import SearchByYearOption from "./searchByYearOption";
import "./searchByDataComponent.scss";
import { useActions } from "../../hooks/useActions";
import { useState } from "react";

const SearchByDataComponent = () => {
  const { fetchPictures } = useActions();
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
  //  fetchPictures(data)
   // fetchPictures(data); // Передаем data в fetchPictures
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
      />
      <datalist id="dayList">
        <SearchByDayOption />
      </datalist>
      <button onClick={searchFunction}>Search</button>
    </form>
  );
};

export default SearchByDataComponent;
