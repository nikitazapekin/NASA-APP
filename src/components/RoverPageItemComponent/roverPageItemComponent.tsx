import { useActions } from "../../hooks/useActions"
import { useTypedSelectors } from "../../hooks/useTypedSelectors"
import { useEffect, useState } from "react"
import "./RoverPageItemComponent.scss"
import Spinner from "react-bootstrap/esm/Spinner"
import { Link } from "react-router-dom"
import SearchByDataComponent from "../searchByDataComponent/searchByDataComponent"
interface  RoverPageItemComponentProps {
    id: string | undefined
}
const RoverPageItemComponent =({id}: RoverPageItemComponentProps)=> {
    const {data, loading, error} =useTypedSelectors(state=> state.RoverReducer)
    const [isClicked, setIsClicked]=useState(true)
    const {fetchRover} =useActions()
    const styles={
        border: " 2px solid #ffffffb9"
    }
    useEffect(()=> {
        if( typeof id=="string"){
            fetchRover(id)
        }
    }, [])
    if(loading){
        return (
            <Spinner />
        )
    }
    return (
        <>
        {loading? (
            <Spinner />
        ) : (

            <div className="roverPageItemComponent">
                <h1 className="roverPageItemComponentPrevTitle">
                    {id}
                </h1>
              


                  <table className="roverBlog"  >
        <tr  >
            <th  className="roverBlogItem"  >Param</th>
            <th  className="roverBlogItem"> Value</th>
        </tr>
        <tr>
            <td  className="roverBlogItem" >Launch date</td>
            <td   className="roverBlogItem">{data.rover.launch_date}</td>
        </tr>
        <tr style={{borderRight: "2px solid black"} }>
            <td   className="roverBlogItem">Landing date</td>
            <td  className="roverBlogItem" > {data.rover.landing_date}</td>
        </tr>
        <tr>
            <td  className="roverBlogItem" >Max date</td>
            <td  className="roverBlogItem" > {data.rover.max_date}</td>
        </tr>
        <tr>
            <td   className="roverBlogItem">Max sol</td>
            <td  className="roverBlogItem" > {data.rover.max_sol}</td>
        </tr>
        <tr>
            <td  className="roverBlogItem" >Status</td>
            <td   className="roverBlogItem"> {data.rover.status}</td>
        </tr>
        <tr>
            <td  className="roverBlogItem" >Total photos</td>
            <td   className="roverBlogItem"> {data.rover.total_photos}</td>
        </tr>
    </table>

            
        <button onClick={()=> console.log(data)}>ss</button>
<h1 className="roverPageItemComponentTitle">
    {id}'s cameras
</h1>
            <div className="roverPageItemComponentWrapper">
{data.rover.cameras.map(item=> (
  <Link 
  style={{textDecoration: "none", color: "#ffffffb9"}}
  to={`/Rover photo/${id}/${item.name}`}>
     <p className="roverPageItemComponentItem">{item.name}</p>
     </Link> 
    ))}
    </div>
   
        </div>
    )}
    </>
    )
}
export default RoverPageItemComponent
