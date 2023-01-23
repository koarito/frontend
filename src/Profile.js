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
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function App() {

  const [profileInfo, setProfileInfo] = useState([]);
  useEffect(() =>{
    loadProfile();
  })
  const loadProfile = async () => {
    const result = await axios.get("localhost:8080/api/getUser");
    setProfileInfo(result.data);
  }
  return (

    
    <div className="App">

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Latitude" variant="outlined" /> 
      <TextField id="outlined-basic" label="Longitude" variant="outlined" /> 
    </Box>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Your Profile</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">E-mail</TableCell>
          </TableRow>
        </TableHead>
        <Button variant ="contained" onClick={() => {console.log()}}>{profileInfo.name}</Button>
        <TableBody>
        
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {profileInfo.name}
              </TableCell>
              <TableCell align="right">{profileInfo.id}</TableCell>
              <TableCell align="right">{profileInfo.firstname}</TableCell>
              <TableCell align="right">{profileInfo.lastname}</TableCell>
              <TableCell align="right">{profileInfo.email}</TableCell>
        
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  
    </div>
  );
}

export default App;
