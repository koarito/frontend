import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
function App() {

  const [weatherInfo, setWeatherInfo] = useState([]);
  useEffect(() =>{
    loadWeather();
  })
  const loadWeather = async () => {
    const result = await axios.get("http://localhost:8080/weather/info?latitude=31.63&longitude=-8.00", {}, {auth: {
      username: "user",
      password: "4e00bbf4-4879-4161-aa1c-610d6aa3ebda"
    }});
    setWeatherInfo(result.data);
  }
  return (
    <div className="App">
     <Stack direction="row" spacing={2}>
   <Button variant ="contained" onClick={() => {console.log(weatherInfo)}}>{weatherInfo.latitude}</Button>
      
     
    </Stack>
    </div>
  );
}

export default App;
