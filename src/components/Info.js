import React from 'react';
import "./Info.css";
import info from '../images/info.png'

import pattern from '../images/pattern.png';

export default function Info () {
    return (
        <div className="info" id="info">
            <div className="info__container"  >
                <h1>KSK Information</h1> 
                <ul>
                    <li>
                        Presale: 
                    </li>
                    <li>
                        Main Drop: 
                    </li>
                    <li>
                        Total number of Krypto Sneak NFTs: 
                    </li>
                    <li>
                        Price per NFT: X ETH + gas
                    </li>
                    <li>
                        Token type: ERC-721
                    </li>
                    <li>
                        Blockchain: Ethereum
                    </li>
                    <li>
                        Smart contract: 
                    </li>
                </ul>
            </div>
        </div>
    );
}
