import React, { useState, useEffect } from "react";
import Input from "./Input";
import axios from "axios";

const INITIAL_STATE = {
  id: 0,
  name: "",
  email: ""
};
function EditProfile() {
  const [user, setUser] = useState(INITIAL_STATE);
  useEffect(() => {
    (async () => {
      try {
        const user = await axios.get(
          "https://localhost:8080/user/getUser?email=Elena.Rutsson@gmail.com", {}, {auth: {
            username: "user",
            password: "b0eea715-7ed2-461b-97e7-d6d05d7184b7"
          }});
        setUser(user.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleInput = (e) => {
    console.log(e.target.name, " : ", e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Data for update : ", user);
      const response = await axios.patch(`https://localhost:8080/user/editUser/Elena.Rutsson@gmail.com?firstName=${user.firstName}&lastName=${user.lastName}`, user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <h1>{user.name}</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="firstName"
          type="text"
          value={user.firstName}
          placeholder={"Your firstname"}
          handleInput={handleInput}
        />
        <br />
        <Input
          name="lastName"
          type="text"
          value={user.lastName}
          placeholder={"Your lastname"}
          handleInput={handleInput}
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
}

export default EditProfile;
