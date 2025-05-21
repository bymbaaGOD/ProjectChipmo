// src/App.js
import React from "react";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/header"
import Systempage from "./pages/SystemPage/systemPage"
import HomePage from "./pages/HomePage/homePage"
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/system" element={<Systempage/>}/>
      </Routes>
    </Router>
    
    <HomePage
    />
    
    </>
  );
}

export default App;
