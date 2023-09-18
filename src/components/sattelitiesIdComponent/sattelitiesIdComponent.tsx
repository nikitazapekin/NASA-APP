/*

import { useActions } from "../../hooks/useActions";
import { useEffect } from "react";
import { useTypedSelectors } from "../../hooks/useTypedSelectors";
import "./sattelitiesIdComponent.scss";

interface SattelitiesIdComponnentProps {
  id: string | undefined;
}

const SattelitiesIdComponent = ({ id }: SattelitiesIdComponnentProps) => {
  useEffect(() => {
    const myLatLng = { lat: 45.363, lng: 45.044 };
    const mapElement = document.getElementById("map");

    if (mapElement) {
      const map = new google.maps.Map(mapElement, {
        zoom: 4,
        center: myLatLng,
      });
    } else {
      console.error("Element with id 'map' not found.");
    }
  }, []);

  const st = {
    borderRight: "2px solid #fff",
  };

  const { fetchSattelitiesId } = useActions();
  const { data, loading, error } = useTypedSelectors((state) => state.sattelitiesIdReducer);

  useEffect(() => {
    fetchSattelitiesId(id);
  }, []);

  let numb = 5;
  let geodeticNum = 3;

  return (
    <div className="sattelitiesIdComponent">
      <h1 className="sattelitiesIdComponentTitle">{data.tle.name} at this moment</h1>
      <h3 className="sattelitiesIdComponentId">{data.tle.satelliteId}</h3>
      <div className="sattelitiesIdComponentLine"></div>

      <div id="map" className="map"></div>

      <script
        src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&v=weekly"
        defer
      ></script>
    </div>
  );
};

export default SattelitiesIdComponent;
*/
/*
import { useActions } from "../../hooks/useActions";
import { useEffect } from "react";
import { useTypedSelectors } from "../../hooks/useTypedSelectors";
import "./sattelitiesIdComponent.scss";

interface SattelitiesIdComponnentProps {
  id: string | undefined;
}

const SattelitiesIdComponent = ({ id }: SattelitiesIdComponnentProps) => {
  useEffect(() => {
    const myLatLng = { lat: 45.363, lng: 45.044 };
    const mapElement = document.getElementById("map");

    if (mapElement) {
      const map = new google.maps.Map(mapElement, {
        zoom: 4,
        center: myLatLng,
      });
    } else {
      // Handle the case where the element with id "map" is not found.
    }
  }, []);

  const st = {
    borderRight: "2px solid #fff",
  };

  const { fetchSattelitiesId } = useActions();
  const { data, loading, error } = useTypedSelectors((state) => state.sattelitiesIdReducer);

  useEffect(() => {
    fetchSattelitiesId(id);
  }, []);

  let numb = 5;
  let geodeticNum = 3;

  return (
    <div className="sattelitiesIdComponent">
      <h1 className="sattelitiesIdComponentTitle">{data.tle.name} at this moment</h1>
      <h3 className="sattelitiesIdComponentId">{data.tle.satelliteId}</h3>
      <div className="sattelitiesIdComponentLine"></div>

      <div className="map"></div>
      <script
        src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&v=weekly"
        defer
      ></script>
    </div>
  );
};

export default SattelitiesIdComponent;
*/











//import { google } from "googlemaps"; // Импортируем типы Google Maps
import { useActions } from "../../hooks/useActions"
import { useEffect, useState } from "react"
import { useTypedSelectors } from "../../hooks/useTypedSelectors"
import "./sattelitiesIdComponent.scss"
import { strict } from "assert"
interface SattelitiesIdComponnentProps {
    id: string | undefined
}
const SattelitiesIdComponent =({id}: SattelitiesIdComponnentProps)=> {



 /* function initMap(): void {
    const myLatLng = { lat: -25.363, lng: 131.044 };
  
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 4,
        center: myLatLng,
      }
    );
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }
  
  declare global {
    interface Window {
      initMap: () => void;
    }
  }
  window.initMap = initMap;

  

useEffect(()=> {
  const myLatLng = { lat: 45.363, lng: 45.044 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });
}, []) */



const st ={
  borderRight: "2px solid #fff"
}
const [launchYear, setLaunchYear] =useState('')
const {fetchSattelitiesId} =useActions()
const {data,loading, error} =useTypedSelectors(state=> state.sattelitiesIdReducer)
useEffect(()=> {
const array = data.tle.line1.split(' ')

if(array[2]!=undefined){

  console.log(array[2].slice(0,2))
  setLaunchYear(`20${array[2].slice(0,2)}`)
}

}, [data.tle.line1])
    useEffect(()=> {
fetchSattelitiesId(id)
    }, [])
  let  numb=5
  let geodeticNum =3
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
            <td  style={st} rowSpan={numb}>Launch year</td>
  
        </tr>


        <tr    className="sattelitiesIdComponentTableItem">
         <td   rowSpan={numb}>

          {launchYear}
         </td>
   </tr>

   <tr  className="sattelitiesIdComponentTableItem">
          {launchYear}
   </tr>

{/*
        <tr>
            <td  style={st} rowSpan={numb}>algoritm</td>
  
        </tr>


        <tr  className="sattelitiesIdComponentTableItem">
       {data.algorithm}
   </tr>
    */}

{/*
   <tr>
            <td  style={st} rowSpan={numb}>Launch year</td>
  
        </tr>


        <tr  className="sattelitiesIdComponentTableItem">
       {data.algorithm}
     
      
 
    </tr> */}



    </table>
    
    <div className="map"></div>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
      defer
    ></script>

</div>
    )
}
export default SattelitiesIdComponent

//https://developers.google.com/maps/documentation/javascript/using-typescript
//npm install @types/googlemaps --save-dev




