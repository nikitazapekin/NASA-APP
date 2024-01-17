import "./renderOfFoundSearchItems.scss"
import { Link } from "react-router-dom"
import { RenderOfFoundSearchItemsProps } from "./Props";
const RenderOfFoundSearchItems = ({ title, url, index, date, nasa_id }: RenderOfFoundSearchItemsProps) => {
    return (
        <Link to={`/article/${nasa_id}/${title}`} style={{ textDecoration: "none" }}>
            <div className="foundSearchItem">
                <h1 className="foundSearchItemTitle">
                    {index + 1}.    {title}
                </h1>
            </div>
        </Link>
    );
}

export default RenderOfFoundSearchItems;
