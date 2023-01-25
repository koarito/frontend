import axios from "axios";


export default axios.create({
  baseURL: "http://localhost:8080/saveUser/",
});


//http://localhost:8080/user/getUser?email=Elena.Rutsson@gmail.com