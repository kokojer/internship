import React from 'react'
import {GoogleMap, Marker, useLoadScript} from '@react-google-maps/api'
import {Spinner} from "react-bootstrap";
import {useMediaQuery} from "react-responsive";


const position = {
    lat: -3.777,
    lng: -38.56325
}

const center = {
    lat: -3.745,
    lng: -38.523
};

export function GoogleMapCustom() {
    const breakPoint = useMediaQuery({ minWidth: 766 })
    let heightMap = breakPoint ? '400px' : '500px'

    const containerStyle = {
        width: '100%',
        height: heightMap
    };
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyD5Ayp33vf4JjiAQ3mDCv-e9zjbl_-iTDM",
        version: '3.47'
    })

    const renderMap = () => {

        return <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={11}
            options={{
                mapTypeControl: false,
                streetViewControl: false,
            }}
        >
            <Marker
                position={position}
            />
        </GoogleMap>
    }

    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>
    }

    return isLoaded ? renderMap() : <Spinner animation="border" />
}