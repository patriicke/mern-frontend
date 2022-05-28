import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/LOGIN/Login";
import Signup from "./Components/SIGNUP/signup";
import Home from "./Components/HOME/home";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home/:email" element={<Home />} />
      </Routes>
    </Router>
  );
}
