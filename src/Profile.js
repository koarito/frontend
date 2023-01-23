import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import EditProfile from './EditProfile';



function Profile() {

  const [profileInfo, setProfileInfo] = useState([]);
  const [email, setEmail] = useState();

  useEffect(() =>{
    loadProfile();
  })
  const loadProfile = async () => {
    const result = await axios.get("http://localhost:8080/user/getUser?email=Elena.Rutsson@gmail.com", {}, {auth: {
          username: "user",
          password: "ac78ef77-65bd-4ea7-9aac-f9e03bba6dd8"
        }});
        setProfileInfo(result.data);
      };  

      const handleChange = () => {
       
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
                {profileInfo.email}
              </TableCell>
              <TableCell align="right">{profileInfo.id}</TableCell>
              <TableCell align="right">{profileInfo.firstName}</TableCell>
              <TableCell align="right">{profileInfo.lastName}</TableCell>
              <TableCell align="right">{profileInfo.email}</TableCell>
              <TableCell align="right">{profileInfo.role}</TableCell>
        
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    

    <Stack direction="row" spacing={2}>

<Button variant="contained" onClick={EditProfile()}>Change profile</Button>
</Stack>
  
    </div>
  );
}

export default Profile;
