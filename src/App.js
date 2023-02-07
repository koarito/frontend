//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,rain,windspeed_10m,winddirection_10m
//http://localhost:8080/weather/info?latitude=31.63&longitude=-8.00

import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Weather from "./Weather";
import Signup from "./Signup";
import LoginComponent from "./components/LoginComponent";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import LogoutComponent from './components/LogoutComponent'
import HeaderComponent from './components/HeaderComponent'
import WelcomeComponent from './components/WelcomeComponent'
import AuthProvider, { useAuth } from './context/AuthContext'

function AuthenticatedRoute({ children }) {
  const authContext = useAuth();

  if (authContext.isAuthenticated) return children;

  return <Navigate to="/" />;
}

  function App() {
    return (
      <div className="App">
        <AuthProvider>
          <BrowserRouter>
            <HeaderComponent />
            <Routes>
            
              <Route path="/signup" exact element={<Signup />} />
              <Route path="/login" exact element={<LoginComponent />} />
              <Route
                path="/welcome/:username"
                element={
                  <AuthenticatedRoute>
                    <WelcomeComponent />
                  </AuthenticatedRoute>
                }
              />
              <Route
                path="/profile/:username"
                element={
                  <AuthenticatedRoute>
                    <Profile />
                  </AuthenticatedRoute>
                }
              />
   
              <Route
                path="/editprofile/:username"
                element={
                  <AuthenticatedRoute>
                    <EditProfile />
                  </AuthenticatedRoute>
                }
              />

              <Route
                path="/weather"
                element={
                  <AuthenticatedRoute>
                    <Weather />
                  </AuthenticatedRoute>
                }
              />
              <Route
                path="/logout"
                element={
                  <AuthenticatedRoute>
                    <LogoutComponent />
                  </AuthenticatedRoute>
                }
              />
            
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </div>
    );
  }

export default App;
