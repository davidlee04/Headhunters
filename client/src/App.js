import React from "react";
import "./App.css";
import Form from "./components/RegistrationForm.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Form />} />
          <Route path="/register" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
