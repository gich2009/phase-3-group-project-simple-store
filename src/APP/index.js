import React             from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage       from "./Pages/LandingPage";
import SignupPage        from "./Pages/SignupPage";
import LoginPage         from "./Pages/LoginPage";
import HomePage          from "./Pages/HomePage";
import ProfilePage       from "./Pages/ProfilePage";
import './App.css';

function APP(){
  return (
    <Routes>
      <Route path="/"          element={<LandingPage />} />
      <Route path="/signup"    element={<SignupPage />} />
      <Route path="/login"     element={<LoginPage/>} />
      <Route path="/home"      element={<HomePage/>} />
      <Route path="/profile/*" element={<ProfilePage/>} />
      <Route path="*"          element={<h1>404 page not found</h1>} />
    </Routes>
  );
}


export default APP;
