import React from 'react';
import "./Welcome.css";
import welcomeGif from '../images/shoeBuildGif.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

export default function Welcome () {
    return (
        <div className="welcome" id="Welcome">
            <div className="welcome__container">
                <h1>Welcome to Krypto Sneak Kollective</h1> 
                <p>At KSK we create top quality collectible NFT's which yield high returns for collectors over the long run with real world utility.</p>
                <p>Owners will be rewarded for their participation with physical limited edition artwork to preserve the essence of collector culture.</p>
                <p>Rewards will be distributed and roadmap updated as goals are completed. See the roadmap for more detail.</p>
                <p>KSK is the place for sneaker heads, collectors and traders that  appreciate the utmost attention to detail at the intersection of sneakers, art and culture expanding into the NFT space.</p>
                <button className="welcome__button"><a href="" target="_blank" rel="noreferrer" className="welcome__link">Join the Krypto Sneak Discord <FontAwesomeIcon icon={faDiscord} /></a></button>
            </div>
            <div className="welcome__imgContainer">
                <img src={welcomeGif} alt="Giraffe Gif"/>
            </div>
        </div>
    
    );
}
