import axios from "./ApiClient";

export const executeBasicAuthenticationService
    = (token) => axios.get(`/basicauth`
    ,{
        headers: {
            Authorization: token
        }
    }
    )

    //TODO is it username, email...?
export const executeJwtAuthenticationService
    = (username, password) => 
    axios.post(`/api/auth/authenticate`,{username,password})