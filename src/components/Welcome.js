import React from 'react';
import "./Welcome.css";
import welcomeGif from '../images/GATB-website-gif.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

export default function Welcome () {
    return (
        <div className="welcome" id="Welcome">
            <div className="welcome__container">
                <h1>Welcome to KryptoKicks</h1> 
                <p>The home of the coolest shoes on the blockchain. About our project and the cool things we do.</p>
                <button className="welcome__button"><a href="" target="_blank" rel="noreferrer" className="welcome__link">Join the KryptoKicks Discord <FontAwesomeIcon icon={faDiscord} /></a></button>
            </div>
            <div className="welcome__imgContainer">
                <img src={welcomeGif} alt="Giraffe Gif"/>
            </div>
        </div>
    
    );
}
