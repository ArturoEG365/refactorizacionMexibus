import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Page.jsx/Login";
import CreateAccount from "./Page.jsx/CreateAccount";
import User from "./Page.jsx/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/user" element={<User />} />
      
        

      </Routes>
    </Router>
  );
}

export default App;
