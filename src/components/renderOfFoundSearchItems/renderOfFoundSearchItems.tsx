import "./renderOfFoundSearchItems.scss"
import { Link } from "react-router-dom"
interface RenderOfFoundSearchItemsProps {
    index: number,
    title: string,
    url: string | undefined ,
    date: string, 
    nasa_id: string
}

const RenderOfFoundSearchItems = ({title, url, index, date, nasa_id}:  RenderOfFoundSearchItemsProps) => {
    return (  
        <Link to={`/article/${nasa_id}/${title}`} style={{textDecoration: "none"}}>

        <div className="foundSearchItem">
         
<h1 className="foundSearchItemTitle">
{index+1}.    {title}
    </h1>
        </div>
        </Link>
    );
}
 
export default RenderOfFoundSearchItems;



//"https://images-api.nasa.gov/album/apollo",

//https://images-api.nasa.gov/asset/as11-40-5874

//https://images-api.nasa.gov/asset/NHQ_2019_0430_RNASA%20Space%20Awards%20Gala%202019.
