import React, { useState, useEffect } from "react";
import Input from "./Input";
import axios from "axios";

const INITIAL_STATE = {
  id: 0,
  name: "",
  email: ""
};
function EditProfile() {

    axios({
        method: 'post',
        url: 'https://localhost:8080/user/save',
          data: {
            firstName: 'Siv', 
            lastName: 'Rutsson',
            email: 'siv@sivan.se',
            password: '123',
            role: 'Role.ADMIN'
          }
        });
  
      }
export default EditProfile;
