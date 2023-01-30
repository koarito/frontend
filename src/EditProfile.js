import * as React from "react";
import axios from "./api/axios";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {Button } from "@mui/material";

function EditProfile(id) {

 const [profileInfo, setValues] = React.useState([]);


  const handleSubmit = (id) => {
    const result = axios.patch(`http://localhost:8080/user/edituser/${id}`, 
    {firstName: profileInfo.firstname, lastname: profileInfo.lastname, email: profileInfo.email
  },{auth: {
    username: "user",
    password: "f97190d7-9518-4efe-a02e-e49d337321d3"
  }});
 setValues(result.data);
  }

  const handleChange = (prop) => (e) => {
    setValues({ ...profileInfo, [prop]: e.target.value });
  };

  return(
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
            value={profileInfo.firstname}
            onChange={handleChange("firstname")}
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
            value={profileInfo.lastname}
            onChange={handleChange("lastname")}
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
      
  )
      }
export default EditProfile;
