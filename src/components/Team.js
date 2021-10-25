import React from 'react';
import "./Team.css";
import shoe1 from '../images/shoe1.png';

export default function Team () {
    return (
        <div className="team" id="team">
            <div className="team__container">
                <h1>The Team</h1> 
            </div>
            <div className="team__imgContainer">
                <div className="team__imgIndividual">
                    <img src={shoe1} alt="Developer Chaz" />
                    <figcaption className="caption">D.B. Super: Artist</figcaption>
                </div>
                <div className="team__imgIndividual">
                    <img src={shoe1} alt="Developer Tom"/>
                    <figcaption className="caption">PineapplePen: Artist</figcaption>
                </div>
                <div className="team__imgIndividual">
                    <img src={shoe1} alt="Developer GoldenX"/>
                    <figcaption className="caption">GoldenX: Developer</figcaption>
                </div>
                <div className="team__imgIndividual">
                    <img src={shoe1} alt="Developer Squeebo"/>
                    <figcaption className="caption">AntonTheSwan: Web3 Developer</figcaption>
                </div>
                <div className="team__imgIndividual">
                    <img src={shoe1} alt="Developer Apollo 21"/>
                    <figcaption className="caption">Apollo 21: <br/>Web Developer</figcaption>
                </div>
            </div>
        </div>
    
    );
}
