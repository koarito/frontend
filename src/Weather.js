//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,rain,windspeed_10m,winddirection_10m
//http://localhost:8080/weather/info?latitude=31.63&longitude=-8.00

import Button from "@mui/material/Button";
import Grid from "@mui/material/Stack";
import React, { useState, useEffect} from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { InputLabel, MenuItem, Select, Typography} from "@mui/material";

function Weather() {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Marrakech");

  const cityLatitude = new Map([
    ["Marrakech", 31.63],
    ["Stockholm", 59.33],
    ["Berlin", 52.52]
  ])
  const cityLongitude = new Map([
    ["Marrakech", -8.00],
    ["Stockholm", 18.07],
    ["Berlin", 13.41]
  ])
  
const tableData = weatherInfo => {
  var temp = []
  weatherInfo.hourly.time.forEach((element, index) => {
  const object = {
  time: element,
  temperature: weatherInfo.hourly.temperature_2m[index],
  windspeed: weatherInfo.hourly.windspeed_10m[index],
  winddirection: weatherInfo.hourly.winddirection_10m[index]
  }
  temp.push(object)
 });
 return temp
}

  const loadWeather = async () => {
    const result = await axios.get(`http://localhost:8080/weather/info?latitude=${cityLatitude.get(selectedCity)}&longitude=${cityLongitude.get(selectedCity)}`, {}, {auth: {
      username: "user",
      password: "ed6962d8-16f1-42e9-a2eb-886955f49d6c"
    }});
    setWeatherInfo(result.data);
  }

  useEffect(() => {
    loadWeather() 
  },[selectedCity]);
  const handleCity = e => {
    setSelectedCity(e.target.value)
  }
  return (
    <div className="App">
      <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      marginTop="auto"
      spacing={4}
    >
      <Grid item>
        <Typography variant="h2">Weather Info</Typography>
      <InputLabel>City</InputLabel>
  <Select
    value={selectedCity}
    label="City"
    onChange={handleCity}
  >
    <MenuItem value={"Marrakech"}>Marrakech</MenuItem>
    <MenuItem value={"Stockholm"}>Stockholm</MenuItem>
    <MenuItem value={"Berlin"}>Berlin</MenuItem>
  </Select>
  </Grid>
  <Grid item>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Time({weatherInfo.hourly_units.time})</TableCell>
              <TableCell align="center">Temperature({weatherInfo.hourly_units.temperature_2m})</TableCell>
              <TableCell align="center">Windspeed({weatherInfo.hourly_units.windspeed_10m})</TableCell>
              <TableCell align="center">Wind direction({weatherInfo.hourly_units.winddirection_10m})</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData(weatherInfo).map(row => (
              <TableRow>
              <TableCell align="center">{row.time}</TableCell>
                 <TableCell align="center">{row.temperature}</TableCell>
                 <TableCell align="center">{row.windspeed}</TableCell>
                 <TableCell align="center">{row.winddirection}</TableCell>
                 </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Grid>
      </Grid>
    </div>
  );
}

export default Weather;
