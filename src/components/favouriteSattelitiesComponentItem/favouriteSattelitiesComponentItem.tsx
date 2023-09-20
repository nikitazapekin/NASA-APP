import { Satellite } from "../../types/sattelities"
import "./favouriteSattelitiesComponentsItem.scss"
import { Link } from "react-router-dom"
interface FavouriteSattelitiesComponentItemProps {
    item: {
        "@id": string;
        "@type": string;
        satelliteId: number;
        name: string;
    date: string;
    line1: string;
    line2: string;
}
}
const FavouriteSattelitiesComponentItem =({item}: FavouriteSattelitiesComponentItemProps )=> {
    return  (
        <div className="favouriteSattelitiesComponentItem">
          <p className="favouriteSattelitiesComponentItemTitle">
         <Link style={{textDecoration: "none", color: "#ffffffb9"}} to={`/sattelities/${item.satelliteId}`}>
              {item.name}
              </Link>
            </p>
        </div>
    )
}
export default FavouriteSattelitiesComponentItem