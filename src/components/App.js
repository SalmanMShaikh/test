
import "antd/dist/antd.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import DiningPage from "./DiningPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/joke" element={<DiningPage />} />
     
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
