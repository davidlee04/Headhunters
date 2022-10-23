import React from "react";
import { useState } from "react";
import TextField from "./TextField.jsx";
import { db, auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";


function RegistrationForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createUser = async() => {
    await setDoc(doc(db, "users", ), );
  }


  const handleRegister = (e) => {
    e.preventDefault();
    if (
      firstName == null ||
      firstName == "" ||
      lastName == null ||
      lastName == "" ||
      emailAddress == null ||
      emailAddress == "" ||
      password == null ||
      password == "" ||
      confirmPassword == null ||
      confirmPassword == ""
    ) {
      alert("Please fill all fields.");
      return;
    }
    if (password != confirmPassword) {
      alert("Password and confirm password fields are not the same.");
      return;
    }
    if (!checkPassword(password)) {
      alert(
        "Invalid password. Password must be between 6-16 characters, have at least one letter and one number, and not contain any whitespace."
      );
      return;
    }
    createUserWithEmailAndPassword(auth, emailAddress, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log(user.uid);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
    setFirstName(firstName.trim());
    setLastName(lastName.trim());
  };

  function checkPassword(password) {
    let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return reg.test(password) && !password.includes(" ");
  }

  return (
    <div>
      <TextField
        type="First Name"
        value={firstName}
        onChange={setFirstName}
        hide={false}
      ></TextField>
      <TextField
        type="Last Name"
        value={lastName}
        onChange={setLastName}
        hide={false}
      ></TextField>
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
      <TextField
        type="Confirm Password"
        value={confirmPassword}
        onChange={setConfirmPassword}
        hide={true}
      ></TextField>
      <button type="submit" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default RegistrationForm;
