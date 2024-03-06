import React, { Component, useRef } from "react";
import { useSpring, animated, useChain } from 'react-spring';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import Login from "./Login";
// import Register from "./Register";


const Home = () => {
    const splashtext = useRef();

    const splashStyle = useAnimation(splashtext);

    useChain ([ splashStyle ])

    // const [apiData, setApiData] = useState({});
    // const [loading, setLoading] = useState(true);;
    return (
        <section id="home-page">
            <animated.div style={splashStyle}>
                <h1>this is a test</h1>
            </animated.div>
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

const useAnimation = (ref) => {
    const spring = useSpring({
        from: {
            opacity:0,
            position:"absolute",
            transform: "scale(0.2)"
        },
        to: [{
            opacity:1,
            transform: "scale(2.0)"
        },
        {
            opacity:0,
            transform: "scale(0.5)"
        }
    ]
    })
}
export default Home;


// examples sites here
// https://www.hostinger.com/tutorials/portfolio-website-examples?ppc_campaign=google_search_generic_hosting_all&bidkw=defaultkeyword&lo=9028784&gad_source=1&gclid=CjwKCAiAopuvBhBCEiwAm8jaMZpdqbqQ0Q3StjYefJL7ok8eQofY3b56pqctRGJI6pFTYx-6dYHeehoCYxYQAvD_BwE
// animated page transitions
// https://www.google.com/search?q=create+web+page+transition+animation&source=lmns&tbm=vid&bih=911&biw=1920&rlz=1C1VDKB_enUS951US951&hl=en&sa=X&ved=2ahUKEwiTs_G1pd6EAxWzx8kDHXjhB38Q0pQJKAF6BAgBEAQ#fpstate=ive&vld=cid:e7b0fd9e,vid:eVwH3VL1EsA,st:0
