
import React from "react";
import "./todaysPictureItem.scss"
import { TodaysPictureItemProps } from "./Props";
const TodaysPictureItem = ({ item }: { item: TodaysPictureItemProps }) => {
  return (
    <div className="todaysPictureItem">
      <h2>{item.title}</h2>
      <img src={item.url} alt="picture" className="todaysPictureItemImage" />
      <p className="paragraphOfTodaysPictureItem">{item.explanation}</p>

    </div>
  );
};

export default TodaysPictureItem;
