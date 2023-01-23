import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function Profile() {

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

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Your Profile</TableCell>
            <TableCell align="right">Id</TableCell>        
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">E-mail</TableCell>
            <TableCell align="right">Role</TableCell>
          </TableRow>
        </TableHead>
  
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
              <TableCell align="right">{profileInfo.role}</TableCell>
        
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  
    </div>
  );
}

export default Profile;
