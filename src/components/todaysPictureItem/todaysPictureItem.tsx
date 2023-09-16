

import React from "react";
import "./todaysPictureItem.scss"
interface TodaysPictureItemProps {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

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
