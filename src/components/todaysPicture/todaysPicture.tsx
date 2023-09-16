import "./todaysPicture.scss"
import { useTypedSelectors } from "../../hooks/useTypedSelectors"
import SearchByDataComponent from "../searchByDataComponent/searchByDataComponent"
import TodaysPictureItem from "../todaysPictureItem/todaysPictureItem"
import { useEffect } from "react"
import SearchByDataMonth from "../searchByMonthComponent/searchByMonthComponent"
interface TodaysPictureProps {
    isClicked: boolean,
    setIsClicked:  React.Dispatch<React.SetStateAction<boolean>>;
    isClickedMonth: boolean,
    setIsClickedMonth:  React.Dispatch<React.SetStateAction<boolean>>;
        }
const TodaysPicture=({isClicked, setIsClicked, setIsClickedMonth, isClickedMonth}: TodaysPictureProps)=> {
    const {pictures, error, loading}=useTypedSelectors(state=> state.achievements)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            console.log(1)
          const target = event.target as HTMLElement;
          if(target){
if(Array.from(target.classList).join(' ')!="todaysPicture" && Array.from(target.classList).join(' ')!="buttonThatAllowsToSearchByDate" 
&& Array.from(target.classList).join(' ')!="searchByDataLine" && Array.from(target.classList).join(' ')!="searchByDataComponentInput" 
&& Array.from(target.classList).join(' ')!="searchByDataComponentButton"
 &&  Array.from(target.classList).join(' ')!="todaysPictureItem" 
 && Array.from(target.classList).join(' ')!="todaysPictureItemImage" 
 && Array.from(target.classList).join(' ')!="paragraphOfTodaysPictureItem" 
) {
    setIsClicked(false)
    console.log(false)
}
            }
        };
    if(isClicked){
        document.addEventListener("click", handleClickOutside);
    }
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, [isClicked, setIsClicked]);




      useEffect(() => {
        const handleClickOutsideQ = (event: MouseEvent) => {
            console.log(2)
          const target = event.target as HTMLElement;
          if(target){
if(Array.from(target.classList).join(' ')!="todaysPicture" && Array.from(target.classList).join(' ')!="buttonThatAllowsToSearchByDateMonth" 
&& Array.from(target.classList).join(' ')!="searchByDataLineMonth" && Array.from(target.classList).join(' ')!="searchByDataComponentInputMonth" 
&& Array.from(target.classList).join(' ')!="searchByDataComponentButtonMonth"
 &&  Array.from(target.classList).join(' ')!="todaysPictureItem" 
 && Array.from(target.classList).join(' ')!="todaysPictureItemImage" 
 && Array.from(target.classList).join(' ')!="paragraphOfTodaysPictureItem" 
 && Array.from(target.classList).join(' ')!="buttonThatAllowsToSearchByMonth"  
) {
    setIsClickedMonth(false)
    console.log(false)
}
            }
        };
    if(isClickedMonth){
        document.addEventListener("click", handleClickOutsideQ);
    }
        return () => {
          document.removeEventListener("click", handleClickOutsideQ);
        };
      }, [isClickedMonth, setIsClickedMonth]);










    return  (
        <div className="">
{isClicked ? (

    <div className="todaysPicture"
    //  onClick={handleClick}
    >
    <SearchByDataComponent isClicked={isClicked}  setIsClicked={setIsClicked} />
 {/*  {pictures.map((item,index)=> (
       <TodaysPictureItem item={item} key={index} />
 ))} */}
    </div>
    ) : (
        <>
        </>
    )}

    {isClickedMonth ? (
<div className="todaysPicture">
<SearchByDataMonth  setIsClickedMonth={setIsClickedMonth} isClickedMonth={isClickedMonth} />
</div>
    ) :
    (
<>

</>
    )
    }
    </div>
    )

}
export default TodaysPicture 

