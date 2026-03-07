import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/YoutubeSignin";
import SignUp from "./pages/CreateAccount";

import './App.css';
export const serverUrl = "http://localhost:8000"
const App = () => {

  console.log("App is rendering");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
     
    </Routes>
  );
};

export default App;