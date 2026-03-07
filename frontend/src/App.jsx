import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import './App.css';
export const serverUrl = "http://localhost:8000"
const App = () => {

  console.log("App is rendering");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
     
    </Routes>
  );
};

export default App;