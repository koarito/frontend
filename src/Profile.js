import * as React from "react";
import axios from "./api/axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {Button } from "@mui/material";

function Profile() {
 
  const [profileInfo, setProfileInfo] = React.useState({
    firstName: "",
    lastName:"",
    email: "",
});

  const userToPatch = {
  firstName: profileInfo.firstName, lastName: profileInfo.lastName, email: profileInfo.email
  };

  let config = {
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      }
    }
    const handleChange = (prop) => (e) => {
      setProfileInfo({ ...profileInfo, [prop]: e.target.value });
    };
  

  React.useEffect(() =>{
    loadProfile();
  })
  const loadProfile = async () => {
    const result = await axios.get("http://localhost:8080/user/getuser?email=amina@aminas.se", {}, {auth: {
          username: "user",
          password: "a7d2538f-a41c-4c76-9043-3798cc170ac5",
      
        }});
        setProfileInfo(result.data);
      };  


      const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/deleteuser?id=${id}`, {}, {auth: {
          username: "user",
          password: "a7d2538f-a41c-4c76-9043-3798cc170ac5"
         

      },
    });
        loadProfile();
      };

      

  const handleSubmit = () => {
    const result = axios.patch("http://localhost:8080/user/edituser/252", 
    {userToPatch}, {config}
    ,{auth: {
    username: "user",
    password: "a7d2538f-a41c-4c76-9043-3798cc170ac5"
  }});
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
    
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(profileInfo.id)}
                  >      
                  Delete
                  </button>



   <form onSubmit={handleSubmit}>
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="90%"
      marginTop="auto"
      marginLeft="4%"
      spacing={2}
    >
      <Grid item>
        <Typography variant="h2">Edit Profile</Typography>
      </Grid>

      <Grid item sx={{ width: 0.5 }}>
        <FormControl fullWidth>
          <InputLabel >
            Förnamn
          </InputLabel>
          <OutlinedInput
            label="Förnamn"
            value={profileInfo.firstName}
            onChange={handleChange("firstName")}
            sx={{ borderRadius: "29px" }}
          />
        </FormControl>
        </Grid>
        <Grid item sx={{ width: 0.5 }}>
        <FormControl fullWidth>
          <InputLabel >
          Efternamn
          </InputLabel>
          <OutlinedInput
            label="Efternamn"
            value={profileInfo.lastName}
            onChange={handleChange("lastName")}
            sx={{ borderRadius: "29px" }}
          />
        </FormControl>
        </Grid>
        <Grid item sx={{ width: 0.5 }}>
        <FormControl fullWidth>
          <InputLabel>
            Mailadress
          </InputLabel>
          <OutlinedInput
            label="Mailadress"
            value={profileInfo.email}
            onChange={handleChange("email")}
            sx={{ borderRadius: "29px" }}
          />
        </FormControl>
      </Grid>
      </Grid>
      
      <Button
            fullWidth
            variant="contained"
            type="submit"
           >
            Klar
            </Button>
    </form>
    </div>
  );
}

export default Profile;
