
import { useActions } from "../../hooks/useActions"
import { useEffect, useState } from "react"
import { useTypedSelectors } from "../../hooks/useTypedSelectors"
import Spinner from "../spinner/spinner"
import "./sattelitiesIdComponent.scss"
import SattelitiesMap from "../Map/map"
interface SattelitiesIdComponnentProps {
    id: string | undefined
}
const SattelitiesIdComponent =({id}: SattelitiesIdComponnentProps)=> {
const st ={
  borderRight: "2px solid #fff"
}
const [launchYear, setLaunchYear] =useState('')
const [inclination, setInclination]=useState('')
const {fetchSattelitiesId} =useActions()
const {data,loading, error} =useTypedSelectors(state=> state.sattelitiesIdReducer)
useEffect(()=> {
const array = data.tle.line1.split(' ')
const array1= data.tle.line2.split(' ')
console.log(array1)
setInclination(array1[3])
console.log(inclination)
if(array[2]!=undefined && array[2]!=undefined){
  setLaunchYear(`20${array[2].slice(0,2)}`)
}

}, [data.tle.line1])
    useEffect(() => {
      fetchSattelitiesId(id);
      const intervalId = setInterval(() => {
        fetchSattelitiesId(id);
      }, 15000);
      return () => clearInterval(intervalId);
    }, []);
  
  let  numb=5
  let geodeticNum =3
  if(loading) {
    return <Spinner />
  }
    return  (
<div className="sattelitiesIdComponent">
  <h1 className="sattelitiesIdComponentTitle">{data.tle.name} at this moment</h1>
  <h3 className="sattelitiesIdComponentId">{data.tle.satelliteId}</h3>
<div className="sattelitiesIdComponentLine" ></div>


<table className="sattelitiesIdComponentTable">
        <tr className="sattelitiesIdComponentTableItem">
            <th style={st} className="sattelitiesIdComponentTableItem br">Data</th>
            <th  style={st}  className="sattelitiesIdComponentTableItem br">Field</th>
            <th  style={st} className="sattelitiesIdComponentTableItem br">Value</th>
            <th  style={st} className="sattelitiesIdComponentTableItem br">unit</th>
        </tr>
        <tr>
            <td  style={st} rowSpan={numb}>position</td>
  
        </tr>
        <tr className="sattelitiesIdComponentTableItem">
            <td  style={st}>position x</td>
            <td  style={st}>{data.vector.position.x}</td>
            <td  style={st}>km</td>
        </tr>
        <tr  style={st}  className="sattelitiesIdComponentTableItem">
            <td  style={st}>position y</td>
            <td  style={st}>{data.vector.position.y}</td>
            <td  style={st}>km</td>
        </tr>
        <tr  className="sattelitiesIdComponentTableItem">
            <td  style={st}>position z</td>
            <td  style={st}>{data.vector.position.z}</td>
            <td  style={st}>km</td>
        </tr>
        <tr  className="sattelitiesIdComponentTableItem">
            <td  style={st}>position r</td>
            <td  style={st}>{data.vector.position.r}</td>
            <td  style={st}>km</td>
        </tr>
        <tr  className="sattelitiesIdComponentTableItem">
            <td  style={st} rowSpan={numb}>velocity </td>
            <td  style={st}>velocity x</td>
            <td  style={st}>{data.vector.velocity.x}</td>
            <td  style={st}>km/s</td>
        </tr>
        <tr  className="sattelitiesIdComponentTableItem">
            <td  style={st}>velocity y</td>
            <td  style={st}>{data.vector.velocity.y}</td>
            <td  style={st}>km/s</td>
        </tr>
        <tr  className="sattelitiesIdComponentTableItem">
            <td  style={st}>velocity z</td>
            <td  style={st}>{data.vector.velocity.z}</td>
            <td  style={st}>km/s</td>
        </tr>
        <tr  className="sattelitiesIdComponentTableItem">
            <td  style={st}>velocity r</td>
            <td  style={st}>{data.vector.velocity.r}</td>
            <td  style={st}>km/s</td>
        </tr>
        <tr  className="sattelitiesIdComponentTableItem">
        </tr>
        <tr  className="sattelitiesIdComponentTableItem">
            <td  style={st} rowSpan={geodeticNum}>geodetic</td>
            <td  style={st}>latitude</td>
            <td  style={st}>{data.geodetic.latitude}</td>
           <td></td> 
        </tr>
        <tr  className="sattelitiesIdComponentTableItem">
         
            <td  style={st}>longitude</td>
            <td  style={st}>{data.geodetic.longitude}</td>
        
        </tr>
        <tr  className="sattelitiesIdComponentTableItem">
       
            <td   style={st}>altitude</td>
            <td  style={st}>{data.geodetic.altitude}</td>
      
        </tr>



        <tr>
            <td  style={st} rowSpan={numb-2}>Other</td>
  
        </tr>


        <tr  className="sattelitiesIdComponentTableItem">
         <td style={st}>launch year</td>
         <td style={st} >
          {launchYear}

         </td>
      <td></td>
    
   </tr>


   <tr>
            <td  style={st} rowSpan={numb}>inclination</td>
  <td style={st}>{inclination}</td>
        </tr>

    </table>

<SattelitiesMap latitude={data.geodetic.latitude} longitude={data.geodetic.longitude}/>
</div>
    )
}
export default SattelitiesIdComponent

//https://developers.google.com/maps/documentation/javascript/using-typescript
//npm install @types/googlemaps --save-dev

