import React from 'react'; 
import './Home.css'

import shoe1 from '../images/shoe1.png'
import shoe2 from '../images/shoe2.png'
import shoe3 from '../images/shoe3.png'
import shoe4 from '../images/shoe4.png'
import shoe5 from '../images/shoe5.png'

export default function Home () {
    return (
        <div className="home" id="home">
            <div className="home__container">
                <h1>KRYPTOKICKS</h1> 
                <p>A collection of 10,000 shoes on the Ethereum Blockchain</p>
                <p>Join the Kicks Community</p>
            </div>
            <div className="home__imgContainer">
                <div className="home__imgIndividual">
                    <img src={shoe3} alt="Developer Chaz" />
                </div>
                <div className="home__imgIndividual">
                    <img src={shoe2} alt="Developer Tom"/>
                </div>
                <div className="home__imgIndividual">
                    <img src={shoe1} alt="Developer GoldenX"/>
                </div>
                <div className="home__imgIndividual">
                    <img src={shoe4} alt="Developer Squeebo"/>
                </div>
                <div className="home__imgIndividual">
                    <img src={shoe5} alt="Developer Apollo 21"/>
                </div>
            </div>
        </div>
    
    );
}

