import { Satellite } from "../../types/sattelities"
import "./favouriteSattelitiesComponentsItem.scss"
import { Link } from "react-router-dom"
import { FavouriteSattelitiesComponentItemProps } from "./Props"
const FavouriteSattelitiesComponentItem = ({ item }: FavouriteSattelitiesComponentItemProps) => {
    return (
        <div className="favouriteSattelitiesComponentItem">
            <p className="favouriteSattelitiesComponentItemTitle">
                <Link style={{ textDecoration: "none", color: "#ffffffb9" }} to={`/sattelities/${item.satelliteId}`}>
                    {item.name}
                </Link>
            </p>
        </div>
    )
}
export default FavouriteSattelitiesComponentItem