import "./todaysPicture.scss"
import { useTypedSelectors } from "../../hooks/useTypedSelectors"
import SearchByDataComponent from "../searchByDataComponent/searchByDataComponent"
import TodaysPictureItem from "../todaysPictureItem/todaysPictureItem"
import { useEffect } from "react"
interface TodaysPictureProps {
    isClicked: boolean,
    setIsClicked:  React.Dispatch<React.SetStateAction<boolean>>;
        }
const TodaysPicture=({isClicked, setIsClicked}: TodaysPictureProps)=> {
    const {pictures, error, loading}=useTypedSelectors(state=> state.achievements)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
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


    return  (
        <>
{isClicked ? (

    <div className="todaysPicture"
   //  onClick={handleClick}
     >
    <SearchByDataComponent isClicked={isClicked}  setIsClicked={setIsClicked} />
   {pictures.map((item,index)=> (
    <TodaysPictureItem item={item} key={index} />
    ))}
    </div>
    ) : (
        <>
        </>
    )}
    </>
    )

}
export default TodaysPicture 

