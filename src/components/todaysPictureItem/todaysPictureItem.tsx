/*
interface TodaysPictureItemProps {
    copyright: string,
date: string
explanation: string;
hdurl: string,
media_type: string,
service_version: string;
title: string
url: string,
}
const TodaysPictureItem =({item}: TodaysPictureItemProps )=> {
    return (
        <div className="todaysPictureItem">

        </div>
    )
}
export default TodaysPictureItem */



import React from "react";

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
      <p>{item.explanation}</p>

    </div>
  );
};

export default TodaysPictureItem;
