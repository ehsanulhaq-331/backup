import React from 'react'

import {
    MapContainer,
    TileLayer,
    Polygon
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {statesData} from './data'

const center = [40.63463151377654, -97.89969605983609]
const componentName = () => {
  return (
    <div className="">
        <MapContainer 
        center={center}
        zoom={10}
        style={{width:"100%" , height:"60vh"}}
    >
        <TileLayer
            url='https://api.maptiler.com/maps/cz-streets-5514/256/{z}/{x}/{y}.png?key=8Hqox63oafKMAfwQmbkk'
            attribution='<div>
                            <a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>
                        </div>'
        />
        {
            statesData.features.map((state) => {
                const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);
                return(<Polygon 
                    pathOptions={{
                        fillColor:"#eee",
                        fillOpacity:0.7,
                        weight:2,
                        opacity:1,
                        dashArray:3,
                        color:'white',
                        
                    }}
                    positions={coordinates}
                    eventHandlers={{
                        mouseover: (e) =>{
                            
                        },
                        mouseout: (e) =>{
                          
                        },
                        click: (e) =>{
                            const layer = e.target;
                            layer.setStyle({
                                fillOpacity:5,
                                weight:5,
                                dashArray:"",
                                color:"#000",
                                fillColor:"#1677bc",
                            })
                        }
                    }}
                />)
            })
        }
    </MapContainer>
    </div>
  )
}

export default componentName
