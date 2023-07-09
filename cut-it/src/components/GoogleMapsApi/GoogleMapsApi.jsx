import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "../GoogleMapsApi/map-styles.css";
import { useState } from "react";
import { Box, CircularProgress } from "@mui/material";

function MapsApi() {
  const [apiKey, setApiKey] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  console.log(typeof process.env.REACT_APP_GOOGLE_MAPS_API_KEY); // Make sure this logs "string" in the console

  if (!isLoaded) {
    return (
      <Box justifyContent="center" alignItems="center" display="flex">
        <CircularProgress />
      </Box>
    );
  }

  function Map() {
    return (
      <GoogleMap
        zoom={17}
        center={{
          lat: 38.70106170138887,
          lng: -9.293231833056469,
        }}
        mapContainerClassName="mapContainer"
        options={{ streetViewControl: true }}
      >
        <MarkerF
          position={{
            lat: 38.70106170138887,
            lng: -9.293231833056469,
          }}
        />
      </GoogleMap>
    );
  }

  return <Map />;
}
export default MapsApi;
