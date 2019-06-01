import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hi There</h2>
        <a
          className="App-link"
          href="/auth/google"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign In With Google
        </a>
      </header>
    </div>
  );
}

export default App;
