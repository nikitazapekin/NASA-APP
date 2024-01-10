
import "./navigationWindowItem.scss"
import { Link } from "react-router-dom";
 interface NavigationWindowProps {
   item: string,
   setIsOpen:  React.Dispatch<React.SetStateAction<boolean>>;
}
const NavigationWindowItem = ({item, setIsOpen}: NavigationWindowProps) => {
    return (
    <Link style={{textDecoration: "none", color: "#fff"}} to={`/${item}`}>
        <div 
        className="navigationWindowItem">
            {item}
        </div>
            </Link>
    )
}
export default NavigationWindowItem;

/* onClick={handleClick}  */