import React, { Component } from "react";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Login from "./Login";
// import Register from "./Register";


const Home = () => {
    const [apiData, setApiData] = useState({});
    const [loading, setLoading] = useState(true);;
    return (
        <section id="home-page">
            <div className="App-header">
                <div class="landingimg-1">    
                </div>
                <p>
                    Hello! I'm <br>
                    </br>Vance Harris<br></br>
                    And I am a GIS developer
                </p>
                <div class="landingimg-2">    
                </div>
            </div>
        </section>
    )
}
export default Home;
