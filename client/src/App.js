import React from 'react';
import "./App.css";
import Form from "./components/Form.jsx";

function App() {
  return (
    <div className="App">
      <h1 className = "App-header">WELCOME TO HEADHUNTERS</h1> 
      <h2 className = "App-start">Start by entering your email below:</h2>
      <Form />
    </div>
   
  );
}

export default App;