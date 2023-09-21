import { useActions } from "../../hooks/useActions"
import { useTypedSelectors } from "../../hooks/useTypedSelectors"
import { useEffect } from "react"
import "./RoverPageItemComponent.scss"
import Spinner from "react-bootstrap/esm/Spinner"
import { Link } from "react-router-dom"
interface  RoverPageItemComponentProps {
    id: string | undefined
}
const RoverPageItemComponent =({id}: RoverPageItemComponentProps)=> {
    const {data, loading, error} =useTypedSelectors(state=> state.RoverReducer)
    const {fetchRover} =useActions()
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
