import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./styles.css";

const mapStyles = {
  width: "100%",
  height: "100%"
};

function MapPage(props) {
  return (
    <div>
      <Map
        google={props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: props.latitude, lng: props.longitude }}
      ></Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg"
})(MapPage);
