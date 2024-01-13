import { useTypedSelectors } from "../../hooks/useTypedSelectors"
 
import { useActions } from "../../hooks/useActions"
import { useEffect, useMemo, useCallback } from "react"
import { useState } from "react"
import "./roversPhotosComponent.scss"
import Spinner from "../spinner/spinner"
import RoversPhotosComponentItem from "../roversPhotosComponentItem/roversPhotosComponentItem"
import Calendar from "../calendar/calendar"
interface RoversPhotoComponentProps {
    id: string | undefined,
    idd: string | undefined
}
function isValueInArrayOrEmpty(updated: any) {
 return (Boolean(updated instanceof Array && (updated.length == 0)));
}
const RoversPhotosComponent =({id, idd}: RoversPhotoComponentProps)=> {   
  const {loading, data, error} =useTypedSelectors(state=> state.RoverCameraReducer)
  const [isEmpty, setIsEmpty] =useState(false)
const {fetchRoverCamera} =useActions()
const date =new Date()
const [isRendered, setIsRendered] =useState(false)
 const [searchDate, setSearchDate] = useState({
   year: date.getFullYear(),
   month: date.getMonth(),
    day: 1
 }) 
 const handleClick =()=> {
  if( id!=undefined &&  idd!=undefined){
    fetchRoverCamera(id, idd, searchDate)
  }
 }
useEffect(()=> {
  setIsEmpty(isValueInArrayOrEmpty(data.photos))
}, [data])
    if(loading) {
     return <Spinner />
    }
    return (
        <div className="roversPhotosComponent">
<div  className="roversPhotosComponentTitle">  Pictures of {id} {idd} camera
</div>
     <Calendar setSearchDate={setSearchDate} /> 

<div className="roversRenderPhotos">
  {data.photos.length>1 && data.photos.map((item, index)=> (
    <RoversPhotosComponentItem  key={index} date={item.earth_date} src={item.img_src} />
    ))}
    </div> 
   <div className="isEmptyPhotos">
     {isEmpty ? ( `There is no photos` ): (<></>)}
    </div>

    <button className="searchRoversPhotoBtn" onClick={handleClick}>Search</button>
        </div>
    )
}
export default RoversPhotosComponent