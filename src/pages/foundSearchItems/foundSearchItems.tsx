import { useParams } from "react-router-dom";
import Navigation from "../../components/navigation/navigation";
import { fetchNasaDatabase } from "../../store/action-creator/nasaDatabase";
import { fetchNasaDatabaseList } from "../../store/action-creator/nasaDatabaseList";
import { useActions } from "../../hooks/useActions"
import { useEffect } from "react";
import "../pagesStyles.scss"
import Footer from "../../components/footer/footer";
import { useTypedSelectors } from "../../hooks/useTypedSelectors"
//import Spinner from "../spinner/spinner"
import Spinner from "../../components/spinner/spinner";
import RenderOfFoundSearchItems from "../../components/renderOfFoundSearchItems/renderOfFoundSearchItems";
interface ObjectsNearEarthProps {
    isAuthenticated: boolean;
  }
const FoundSerachItems = ({isAuthenticated}: ObjectsNearEarthProps) => {
    const {data, error, loading} =useTypedSelectors(state=>state.NasaDatabaseListReducer)
 const {fetchNasaDatabaseList} =useActions()
useEffect(()=> {
    if(typeof id=="string"){
        fetchNasaDatabaseList(id)
    }
}, [])
useEffect(()=> {
console.log("data at" +JSON.stringify(data))
console.log(data.collection.items)
}, [data])
    const {id}= useParams()
    if(loading){ 
      return <Spinner />
    }
    return ( 
        <div className="pageLayout">
        <Navigation isAuthenticated={isAuthenticated} />
{data && data.collection && data.collection.items && data.collection.items.length > 0 ? (
  data.collection.items.map((item, index) => (
    (item.links && item.links[0]?.href) || item?.href ? (
      <RenderOfFoundSearchItems
        key={index}
        date={item.data[0].date_created}
        index={index}
        title={item.data && item.data[0]?.title}
        url={item.links && item.links[0]?.href || item?.href}
        nasa_id={item.data[0].nasa_id}
      />
    ) : (
   <></>
    )
  ))
) : (
  <h1>No search results.</h1>
)}
<Footer />
        </div>
     );
}
export default FoundSerachItems;