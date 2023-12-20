
import React, {useState, useCallback} from "react";
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF  } from '@react-google-maps/api';

// Images
import Logo from "../../images/Logo.svg"

// Styles
import './AboutMap.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCrosshairs
  } from "@fortawesome/free-solid-svg-icons";
    
  const containerStyle = {
      width: '100%',
      height: '400px'
    };
    
    const center = {
      lat: 40.614260,
      lng: 22.956390,
    };

export const AboutMap = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      })

      const [map, setMap] = useState(null);
      const [showInfoWindow, setShowInfoWindow] = useState(false);

      const onLoad = useCallback(function callback(map) {
        setMap(map)
      }, [])

      const onUnmount = useCallback(function callback(map) {
        setMap(null)
      }, [])

    const handleMarkerClick = () => {
        setShowInfoWindow(true);
      };
    
      const handleInfoWindowClose = () => {
        setShowInfoWindow(false);
      };


    return (
        <section className="AboutMap">
            {isLoaded ? (
                <>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={13}
                    options={{
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false
                    }}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    <>
                        {map && <MarkerF position={center} onClick={handleMarkerClick} />}
                        {showInfoWindow && (
                            <InfoWindowF
                            title="none"
                            position={center}
                            onCloseClick={handleInfoWindowClose}
                            >
                                <div className="tooltip">
                                    <img src = {Logo} alt="little lemon" />
                                    <h3>Little Lemon Restaurant</h3>
                                    <p>Karaiskaki 19</p>
                                    <p>Thessaloniki 546 41, Greece</p>
                                    <a href="https://www.google.com/maps/place/Karaiskaki+19,+Thessaloniki+546+41,+Greece/@40.6674429,22.89562,17z/data=!3m1!4b1!4m6!3m5!1s0x14a83a196bafef2b:0xe4db723e8fac7ecd!8m2!3d40.6674429!4d22.8982003!16s%2Fg%2F11lm1d6n7w?entry=ttu" target="_blank" rel="noopener noreferrer">
                                        View Location on Google Maps
                                    </a>
                                </div>
                            </InfoWindowF>
                        )}
                    </>

                </GoogleMap>
                <div className="centerButton">
                    <FontAwesomeIcon icon={faCrosshairs} size="xl" onClick={()=> map.panTo(center)}  />
                </div>
             </>
             ): <div>Loading...</div>
            }
        </section>
    )
}



