import React, { useState } from 'react'
import MapGL, {Marker, Popup} from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Geolib, { getCenter } from 'geolib'
function Map({searchResults}) {
  const [selectedLocation, setSelectedLocation] = useState({});
  console.log(selectedLocation)
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11
  });
  //Transform searchResult object

  const ob = []
  const Location = function(latitude, longitude){
    this.latitude = latitude
    this.longitude = longitude
  }
  searchResults.map((item)=>(
    ob.push(new Location(item.lat, item.long))
  ))
  const center = getCenter(ob);
  
  return (
<MapGL
  style={{ width: '100%', height: '100%' }}
  mapStyle='mapbox://styles/yonibabi/cl01grp80000z14mnh6aod19q'
  accessToken={process.env.mapbox_key}
  latitude={center.latitude}
  longitude={center.longitude}
  zoom={viewport.zoom}
  onViewportChange={setViewport}
>
      {searchResults.map((result)=>(
        <div key = {result.long}>
          <Marker longitude = {result.long} latitude ={result.lat} offsetLeft = {-20} offsetTop= {-10}>
            <p onClick = {()=>setSelectedLocation(result)} className = 'cursor-pointer text-2xl animate-bounce'
            role = 'img'
            aria-label = 'push-pin'
            >📌</p>
          </Marker>
          
          {selectedLocation.long == result.long ? (
            <Popup 
            onClose = {()=>setSelectedLocation({})}
            closeOnClick = {true}
            latitude={result.lat}
            longitude = {result.long}
            >
              {result.title}
            </Popup>
          ):(false)}
        </div>
      ))}
</MapGL>
  )
}

export default Map
