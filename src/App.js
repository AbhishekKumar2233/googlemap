import "./styles.css";
import React, { useState } from "react";
import MapPage from "./MapPage";

export default function App() {
  const geolocation = navigator.geolocation;
  const [coords, setcoords] = useState({});

  geolocation.getCurrentPosition(
    (position) => {
      setcoords(position.coords);
    },
    () => {
      console.log(new Error("Permission denied"));
    }
  );

  return (
    <div className="App">
      <h1>Hello latitude</h1>
      <h2>{coords.latitude}</h2>
      <h2>{coords.longitude}</h2>
      <MapPage latitude={coords.latitude} longitude={coords.longitude} />
    </div>
  );
}
