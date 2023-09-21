
import * as React from 'react';
import Map, {NavigationControl, Marker, MapLib} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import Sattelity from "../../asserts/sattelity.png"
import "./map.scss"

interface SattelitiesMapProps {
  latitude:number;
  longitude:number
}



function SattelitiesMap({latitude, longitude}:SattelitiesMapProps ) {
  return (
    <div className="map">
    
      <Map mapLib={maplibregl as any} 
        initialViewState={{
          latitude: latitude,
          longitude: longitude,
          zoom: 2,
        }}
        style={{width: "100%", height: " calc(100vh - 98px)"}}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=AQNfDKrMi6QziS7yFql3"
      >
        <NavigationControl position="top-left" />
  {/*  <Marker longitude={16.52} latitude={49.23} color="green" /> */}
  <Marker longitude={longitude} latitude={latitude}> 
  <img src={Sattelity} alt="Marker Icon"  style={{width: "50px", height: "50px"}}/>
</Marker>

      </Map>
    </div>
  );
}

export default SattelitiesMap; 



//npm install react-map-gl maplibre-gl mapbox-gl
//https://cloud.maptiler.com/account/keys/

