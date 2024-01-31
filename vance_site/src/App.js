import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, Link, Router } from 'react-router-dom';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <header className="Landing-Page">
      <div id="root">
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Profile/:user_id' element={<Profile />} />
          <Route path='/AddQuestion/:user_id' element={<AddQuestion />} />
          <Route path='/ViewQuestion/:user_id' element={<ViewQuestion />} />
          <Route path='/Delete/:user_id' element={<Delete />} /> */}
        </Routes>
      </div>
      </header>
    </div>
  );
}

export default App;
