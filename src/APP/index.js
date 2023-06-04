import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignupPage  from "./Pages/SignupPage";
import LoginPage   from "./Pages/LoginPage";
import HomePage    from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";

function APP(){
  return (
    <Routes>
      <Route exact path="/"        element={<LandingPage />} />
      <Route exact path="/signup"  element={<SignupPage />} />
      <Route exact path="/login"   element={<LoginPage/>} />
      <Route exact path="/home"    element={<HomePage/>} />
      <Route exact path="/profile" element={<ProfilePage/>} />
      <Route path="*"              element={<h1>404 page not found</h1>} />
    </Routes>
  );
}


export default APP;