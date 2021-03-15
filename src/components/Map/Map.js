import React, { useEffect, useState } from 'react';
import ReactMapGL,
{
    NavigationControl,
    FullscreenControl,
    ScaleControl,
    GeolocateControl
}
    from 'react-map-gl';
import './Map.css';

const geolocateStyle = {
    top: 0,
    left: 0,
    padding: '10px'
};

const fullscreenControlStyle = {
    top: 36,
    left: 0,
    padding: '10px'
};

const navStyle = {
    top: 72,
    left: 0,
    padding: '10px'
};

const scaleControlStyle = {
    bottom: 36,
    left: 0,
    padding: '10px'
};

const Map = () => {
    const MAP_API = "pk.eyJ1Ijoicm9lZWM4NCIsImEiOiJja20zcHJjcjgyZXA1Mm5yemg5dmkwbGhoIn0.K4dku0CyWKi2DPAUyLuX3A";
    const [viewport, setViewport] = useState({
        latitude: 0,
        longitude: 0,
        zoom: 8
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setViewport(prevVp => ({...prevVp, latitude: pos.coords.latitude, longitude: pos.coords.longitude}))
        })
    }, [])

    return (
        <div className="map">
            <ReactMapGL
                {...viewport}
                width="100%"
                height="100%"
                onViewportChange={(vp) => setViewport(vp)}
                mapboxApiAccessToken={MAP_API}
                mapStyle="mapbox://styles/mapbox/dark-v9"
            >
                <GeolocateControl style={geolocateStyle} />
                <FullscreenControl style={fullscreenControlStyle} />
                <NavigationControl style={navStyle} />
                <ScaleControl style={scaleControlStyle} />
            </ReactMapGL>
        </div>
    );
}

export default Map;