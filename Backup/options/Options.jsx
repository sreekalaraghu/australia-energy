import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, {LngLat, Marker} from 'react-map-gl';


const Options = () => {
  return (
    <div name='options' className='options'>
            <div className="container">
            <h1>Map</h1>
        <Map mapboxAccessToken='pk.eyJ1IjoiaXdhaGl0aCIsImEiOiJjbGJ3azB5MjcwamMzM3hyOXdndWQxNTdjIn0.AmwjFAEb5Gbb3IzM1Lia0g'
        style={{
            width: "500px",
            height: "500px",
            borderRadius: "15px",
            border: "2px solid red"
        }}

        initialViewState = {{
            longitude: '133.7751',
            latitude: '25.2744',
            
        }}
        mapStyle = "mapbox://styles/mapbox/streets-v9"
        >
        <Marker
        longitude={144.9631}
        latitude={37.8136}
        />

        </Map>
                
            </div>
        </div>



        

  )
}

export default Options