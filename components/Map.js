import React, { useState } from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import getCenter from  'geolib/es/getCenter'
import { LocationMarkerIcon} from '@heroicons/react/solid'
import MapCard from './MapCard';
import { motion } from "framer-motion"




function Map({ searchResults }) {

    console.log(searchResults)
    const [SelectedLocation, setSelectedLocation] = useState({})

    // Transform the search Result object into an object
    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }))

    const center= getCenter(coordinates);
    const [viewport, setviewport] = useState(
        {
            width: "100%",
            height: "100%",
            latitude: center.latitude,
            longitude: center.longitude,
            zoom: 11,

        }

    )
    
    return (
        <ReactMapGL
        mapStyle="mapbox://styles/deanbarber/cks18gebz852818o0ds9s71bo"
        mapboxApiAccessToken= {process.env.mapbox_key}
        {...viewport}
        onViewportChange={(viewport) => setviewport(viewport)}
        >
            {searchResults.map(result => (
                
                <div key={result.long}>
                    
                    <Marker
                    longitude={result.long}
                    latitude= {result.lat} 
                    offsetLeft={-20}
                    offsetTop={-10}>
                        <LocationMarkerIcon
                        onClick={() => setSelectedLocation(result)}
                        className=' text-red-400 h-12 cursor-pointer animate-bounce'/>
                    </Marker>
                    {/* Popup When the button is clicked */}
                    {SelectedLocation.long === result.long ? (
                        <motion.div whileHover={{
                            scale: 0.9,
                            position: 'relative',
                            zIndex: 0,
                            transition: {
                            duration: 0.2
                            }
                        }}>
                            <Popup
                        closeOnClick={true}
                        onClose= {() => setSelectedLocation({})}
                        latitude={result.lat}
                        longitude= {result.long}>
                            
                                <MapCard img= {result.img}  title={result.title} star= {result.star} price = {result.price} description= {result.description}  />

                                
                        </Popup>

                        </motion.div>
                        
                    ) :
                    (
                        false
                    )}
                </div>
            ))}
            
        </ReactMapGL>
    )
}

export default Map
