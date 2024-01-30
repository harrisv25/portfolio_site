import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <header className="Landing-Page">
      <div className="App-header" style={{ 
      backgroundImage: `url("https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350")` 
    }}>
          <p>
            Hello! I'm <br>
            </br>Vance Harris<br></br>
            And I am a GIS developer
          </p>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
