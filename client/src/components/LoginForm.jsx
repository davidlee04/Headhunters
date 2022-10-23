import React from "react";
import { useState } from "react";
import TextField from "./TextField.jsx";
import { auth } from "../firebase";

function RegistrationForm(props) {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  

  const handleLogin = (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
      <TextField
        type="Email Address"
        value={emailAddress}
        onChange={setEmailAddress}
        hide={false}
      ></TextField>
      <TextField
        type="Password"
        value={password}
        onChange={setPassword}
        hide={true}
      ></TextField>
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default RegistrationForm;
