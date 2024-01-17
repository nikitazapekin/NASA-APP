
import SearchByMonthOption from "../searchByDataComponent/searchByMonthOption";
import SearchByYearOption from "../searchByDataComponent/searchByYearOption"
import "./searchByMonth.scss";
import { useActions } from "../../hooks/useActions";
import { useState } from "react";
import { months } from "../../utils/month";
import { TodaysPictureProps } from "./Props";
const SearchByDataMonth = ({ isClickedMonth, setIsClickedMonth }: TodaysPictureProps) => {
  const { fetchAllDailyPictures } = useActions()
  const [data, setData] = useState({
    year: "",
    month: "",
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const searchFunction = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    let year = data.year
    let month = String(months.indexOf(data.month) + 1)
    if (month.length == 1) {
      month = "0" + month
    }
    let date = `${year}-${month}-01`
    let lastDay = new Date(Number(year), Number(month), 0).getDate();
    let lastDate = `${year}-${month}-${lastDay}`
    fetchAllDailyPictures(date, lastDate)
  };
  return (
    <form className="searchByDataLineMonth">
      <input
        onChange={handleInputChange}
        name="year"
        value={data.year}
        placeholder="Select year"
        type="text"
        list="yearList"
        autoComplete="off"
        className="searchByDataComponentInputMonth"
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
        className="searchByDataComponentInputMonth"
      />
      <datalist id="monthList">
        <SearchByMonthOption />
      </datalist>

      <button
        className="searchByDataComponentButtonMonth"
        onClick={searchFunction}>Search</button>

    </form>
  );
};

export default SearchByDataMonth;
