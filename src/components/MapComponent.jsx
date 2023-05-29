import React from "react";
import Map from "react-map-gl";

const MapComponent = () => {
  const africaCountries = [
    { name: "Nigeria", latitude: 9.082, longitude: 8.6753 },
    { name: "Egypt", latitude: 26.8206, longitude: 30.8025 },
    { name: "South Africa", latitude: -30.5595, longitude: 22.9375 },
    { name: "Kenya", latitude: -1.2864, longitude: 36.8172 },
    { name: "Morocco", latitude: 31.7917, longitude: -7.0926 },
  ];

  const [viewport, setViewport] = React.useState({
    width: "100%",
    height: "600px",
    latitude: 8.7832,
    longitude: 34.5085,
    zoom: 3,
  });
  const [selectedCountry, setSelectedCountry] = React.useState(null);

  return (
    <Map
      mapLib={import("mapbox-gl")}
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
};

export default MapComponent;
