import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/sandyp007/Weather_App.git">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://aboutmee.vercel.app">
          Sandeep Prajapati
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
