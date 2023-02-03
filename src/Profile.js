import * as React from "react";
import axios from "./api/ApiClient";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Profile() {
  const [profileInfo, setProfileInfo] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  /*
  let config = {
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      }
    }*/

  React.useEffect(() => {
    loadProfile();
  });

  const loadProfile = async () => {
    const result = await axios.get(
      "http://localhost:8080/user/getuser?email=amina@aminas.se",
      {},
      {
      /*   auth: {
          username: "user",
          password: "a7d2538f-a41c-4c76-9043-3798cc170ac5",
        }, */
      }
    );
    setProfileInfo(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(
      `http://localhost:8080/user/deleteuser?id=${id}`,
      {},
      {
       /*  auth: {
          username: "user",
          password: "a7d2538f-a41c-4c76-9043-3798cc170ac5",
        }, */
      }
    );
    loadProfile();
  };

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
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
    </div>
  );
}

export default Profile;
