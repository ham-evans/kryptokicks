import React from 'react';
import "./Roadmap.css"
import roadShoe1 from '../images/tempRoad1.jpeg'
import roadShoe2 from '../images/tempRoad2.jpeg'
import roadShoe3 from '../images/tempRoad3.jpeg'
import roadShoe4 from '../images/tempRoad4.jpeg'
import roadShoe5 from '../images/tempRoad5.jpeg'

export default function Roadmap () { 
    return (
        <div className="roadmap" id="roadmap">
            <div className="titleWrapper">
                <h1>Krypto Sneak Roadmap</h1>
            </div>
            <div className="wrapper">
                <div className="roadmap__elements">
                    <div className="roadmap__text">
                        <h2>0% - Krypto Sneaks are Live!</h2>
                    </div>
                    <div className="roadmap__imgContainer">
                        <img src={roadShoe1} alt="Roadmap Shoe Example" />
                    </div>
                </div>
                
                <div className="roadmap__elements">
                    <div className="roadmap__imgContainer-pc">
                        <img src={roadShoe2} alt="Roadmap Shoe Example" />
                    </div>
                    <div className="roadmap__text">
                        <h2>25% - All holders get a free sticker.</h2>
                    </div>
                    <div className="roadmap__imgContainer-mobile">
                        <img src={roadShoe2} alt="Roadmap Shoe Example" />
                    </div>
                </div>
                
                <div className="roadmap__elements">
                    <div className="roadmap__text">
                        <h2>50% - All holders get a free signed print</h2>
                    </div>
                    <div className="roadmap__imgContainer">
                        <img src={roadShoe3} alt="Roadmap Shoe Example" />
                    </div>
                </div>
               
                <div className="roadmap__elements">
                    <div className="roadmap__imgContainer-pc">
                        <img src={roadShoe4} alt="Roadmap Shoe Example" />
                    </div>
                    <div className="roadmap__text">
                        <h2>75% - Donation to benefit the homeless</h2>
                    </div>
                    <div className="roadmap__imgContainer-mobile">
                        <img src={roadShoe4} alt="Roadmap Shoe Example" />
                    </div>
                </div>
               
                <div className="roadmap__elements">
                    <div className="roadmap__text">
                        <h2>100% - Physical Holographic Collectible card to all holders.</h2>
                    </div>
                    <div className="roadmap__imgContainer">
                        <img src={roadShoe5} alt="Roadmap Shoe Example" />
                    </div>
                </div>
            </div>
        </div>
    );
}