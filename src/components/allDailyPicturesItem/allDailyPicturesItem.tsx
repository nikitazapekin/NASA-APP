import "./allDailyPicturesItem.scss"
interface AllDailyPicturesItemProps {
    copyright: string,
date: string,
explanation: string,
hdurl: string,
service_version: string,
media_type: string,
title: string,
url: string
}
const AllDailyPicturesItem=({item}: {item: AllDailyPicturesItemProps})=> {
    return (
        <div className="allDailyPicturesItem">


      <div className="allDailyPicturesItemLine">
         <h2 className="allDailyPicturesItemTitle">{item.title}</h2> 
<p className="allDailyPicturesItemDate">{item.date}</p>

      </div>
<img className="allDailyPicturesItemImg" src={item.url} />
<p className="allDailyPicturesItemText">
    {item.explanation}
</p>
        </div>
    )
}
export default AllDailyPicturesItem