import "./roversPhotosComponentItem.scss"
import Heart from "../../asserts/heart.png"
import JwtDecode from "../../hooks/jwt-decode.hook"
import { useActions } from "../../hooks/useActions"
import { addPhotoToFavourite } from "../../http/addPhotoToFavouritePhotos"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
interface  RoversPhotosComponentItemProps {
    date: string,
    src: string
}


const RoversPhotosComponentItem=({date, src}: RoversPhotosComponentItemProps)=> {
    const {id, idd} =useParams()
    const {userData} = JwtDecode()
    useEffect(()=> {
console.log("idddd" +id, idd)
    }, [])
   // const {addPhotoToFavourite} =useActions()
    const handleClick=()=> {
        
        if(userData!=undefined){
    if(typeof userData.token=="string"){
    
    addPhotoToFavourite({token: userData?.token, title: "Rover "+id+", Camera: " +idd, url: src, date: date, explanation: ""})
    }
        }
    }
    return (
        <div className="roversPhotosComponentItem">
         <div className="roversPhotosComponentItemTitle">{date}</div>
            <img className="roversPhotosComponentItemImage" src={src} alt="mars" />
<img onClick={handleClick} className="allDailyPicturesItemAddToFavourite" src={Heart} /> 
        </div>
    )
}
export default RoversPhotosComponentItem