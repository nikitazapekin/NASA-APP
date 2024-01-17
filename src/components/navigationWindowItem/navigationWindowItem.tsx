
import "./navigationWindowItem.scss"
import { Link } from "react-router-dom";
import { NavigationWindowProps } from "./Props";
const NavigationWindowItem = ({ item }: NavigationWindowProps) => {
    return (
        <Link style={{ textDecoration: "none", color: "#fff" }} to={`/${item}`}>
            <div
                className="navigationWindowItem">
                {item}
            </div>
        </Link>
    )
}
export default NavigationWindowItem;
