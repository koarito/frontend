//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,rain,windspeed_10m,winddirection_10m
//http://localhost:8080/weather/info?latitude=31.63&longitude=-8.00

import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
