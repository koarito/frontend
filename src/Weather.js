//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,rain,windspeed_10m,winddirection_10m
//http://localhost:8080/weather/info?latitude=31.63&longitude=-8.00

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Weather() {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Marrakech");
  var cityLatitude = new Map([
    ["Marrakech", 31.63],
    ["Stockholm", 59.33],
    ["Berlin", 52.52]
  ])
  var cityLongitude = new Map([
    ["Marrakech", -8.00],
    ["Stockholm", 18.07],
    ["Berlin", 13.41]
  ])
  
  useEffect(() => {
    loadWeather();
  });
  const loadWeather = async () => {
    const result = await axios.get(`http://localhost:8080/weather/info?latitude=${cityLatitude.get(selectedCity)}&longitude=${cityLongitude.get(selectedCity)}`, {}, {auth: {
      username: "user",
      password: "fc5ad5bb-4447-4054-86d4-c1944366c0df"
    }});
    setWeatherInfo(result.data);
  }

  const handleSetCity = () => {

  }
  return (
    <div className="App">
      <Stack direction="row" spacing={2}>

        <Button variant="contained" onClick={() => {console.log(weatherInfo)}}>Set City</Button>
      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">time</TableCell>
              <TableCell align="right">temperature</TableCell>
              <TableCell align="right">wind direction</TableCell>
              <TableCell align="right">windspeed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="right">{weatherInfo.temperature_2m}</TableCell>
              <TableCell align="right">{weatherInfo.rain}</TableCell>
              <TableCell align="right">{weatherInfo.winddirection_10m}</TableCell>
              <TableCell align="right">{weatherInfo.windspeed_10m}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Weather;
