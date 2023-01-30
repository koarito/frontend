//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,rain,windspeed_10m,winddirection_10m
//http://localhost:8080/weather/info?latitude=31.63&longitude=-8.00

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Weather from "./Weather";
import Signup from "./Signup";
import Login from "./Login";
import Profile from "./Profile";
import EditProfile from "./EditProfile";


function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
		<Route path="/signup" exact element={<Signup />} />
          <Route path="/login" element={<Login />} />
		  <Route path="/profile" element={<Profile />} />
      <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
