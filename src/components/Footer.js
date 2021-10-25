import React, { Component } from 'react'; 
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import logoWhite from '../images/logoWhite.png'

import "./Footer.css";

export default class Footer extends Component { 
  render () {
    return (
      <nav className="footer">
        <div className="footer-container">
          <HashLink smooth to="#home" className="footer-logo">
            <img className="footer__imgLogo" src={logoWhite} alt="GATB Logo"/>
          </HashLink>

          <ul className="footer-menu">
            <li className="footer-item">
              <Link className="footer-links" to={{ pathname: "" }} target="_blank" >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </li>
            <li className="footer-item">
              <Link className="footer-links" to={{ pathname: "" }} target="_blank" >
                <FontAwesomeIcon icon={faDiscord} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}