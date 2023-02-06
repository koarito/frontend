import axios from "./ApiClient";
/*
export const executeBasicAuthenticationService
    = (token) => axios.get(`/basicauth`
    ,{
        headers: {
            Authorization: token
        }
    }
    )
*/
    //TODO is it username, email...?
export const executeJwtAuthenticationService
    = (email, password) => 
    axios.post(`/api/auth/authenticate`,
    {
       email: email,
       password: password
    })

