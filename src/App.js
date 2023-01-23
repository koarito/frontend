//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,rain,windspeed_10m,winddirection_10m



import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function App() {

  const [weatherInfo, setWeatherInfo] = useState([]);
  useEffect(() =>{
    loadWeather();
  })
  const loadWeather = async () => {
    const result = await axios.get("http://localhost:8080/weather/info?latitude=31.63&longitude=-8.00", {}, {auth: {
      username: "user",
      password: "c88a6e5c-3136-444a-8109-ae87ce3c8ed3"
    }});
    setWeatherInfo(result.data);
  }
  return (

    
    <div className="App">

     <Stack direction="row" spacing={2}>
    
   <Button variant ="contained" onClick={() => {console.log(weatherInfo)}}>{weatherInfo.latitude}</Button>
    
    </Stack> 

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Weather for your chosen city</TableCell>
            <TableCell align="right">latitude</TableCell>
            <TableCell align="right">longitude</TableCell>
            <TableCell align="right">temperature</TableCell>
            <TableCell align="right">rain</TableCell>
            <TableCell align="right">wind direction</TableCell>
            <TableCell align="right">windspeed</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        
            <TableRow
              key={weatherInfo.latitude}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {weatherInfo.latitude}
              </TableCell>
              <TableCell align="right">{weatherInfo.latitude}</TableCell>
              <TableCell align="right">{weatherInfo.longitude}</TableCell>
              <TableCell align="right">{weatherInfo.temperature}</TableCell>
              <TableCell align="right">{weatherInfo.rain}</TableCell>
              <TableCell align="right">{weatherInfo.wind_direction_10m}</TableCell>
              <TableCell align="right">{weatherInfo.wind_speed_10m}</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  
    </div>
  );
}

export default App;
