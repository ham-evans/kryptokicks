import React from 'react';
import "./Info.css";
import info from '../images/info.png'

import pattern from '../images/pattern.png';

export default function Info () {
    return (
        <div className="info" id="info" style={{ backgroundImage: `url(${pattern})` }}>
            <div className="info__imgContainer">
                <img className="info__imgIndividual" src={info} />
            </div>
            <div className="info__container"  >
                <h1>Girrafe Bar Information</h1> 
                <ul>
                    <li>
                        Release date: To be announced
                    </li>
                    <li>
                        Total number of Giraffe NFTs: 10,000
                    </li>
                    <li>
                        Total number of Giraffe NFTs withheld: 55 (giveaways and team)
                    </li>
                    <li>
                        Price per NFT: 0.055 ETH + gas
                    </li>
                    <li>
                        Token type: ERC-721
                    </li>
                    <li>
                        Blockchain: Ethereum
                    </li>
                    <li>
                        File hosting: IPFS
                    </li>
                    <li>
                        Smart contract: Coming soon!
                    </li>
                </ul>
            </div>
        </div>
    );
}