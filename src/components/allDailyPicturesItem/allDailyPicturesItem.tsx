import "./allDailyPicturesItem.scss"
import Heart from "../../asserts/heart.png"
import JwtDecode from "../../hooks/jwt-decode.hook"
import { addPhotoToFavourite } from "../../http/addPhotoToFavouritePhotos"
import { AllDailyPicturesItemProps } from "./Props"
const AllDailyPicturesItem = ({ item }: { item: AllDailyPicturesItemProps }) => {
    const { userData } = JwtDecode()
    const handleClick = () => {
        if (userData != undefined) {
            if (typeof userData.token == "string") {

                addPhotoToFavourite({ token: userData?.token, title: item.title, url: item.url, date: item.date, explanation: item.explanation })
            }
        }
    }
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
            <img src={Heart} className="allDailyPicturesItemAddToFavourite" onClick={handleClick} />
        </div>
    )
}
export default AllDailyPicturesItem