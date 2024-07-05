import React from "react";
import image1 from '../asserts/images/1.jpg';
import image2 from '../asserts/images/2.png';
import image3 from '../asserts/images/3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Header = () => {
  return (
    <div>
      <div className="row">
        <div className="logo-column">
          <img src={image2} alt="Logo" className="logo" />
          <img src={image3} alt="Logo" className="logo-nipm" />
        </div>
        <div className="text-column">
          <h1>LIBRARY</h1>
          <h3>NATIONAL INSTITUTE OF PLANTATION MANAGEMENT</h3>
        </div>
        <div className="contact-icons">
        <FontAwesomeIcon icon={faEnvelope} className="email-icon"/><div className="text-email">info@nipm.gov.lk</div>
        <FontAwesomeIcon icon={faPhone} className="phone-icon"/><div className="text-phone"> +94 11-2770232</div>
        
      </div>
      </div>
      <div className="header">
        <div className="space" />
        <nav className="nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/e-resources">E-Resources</a>
            </li>
            <li>
              <a href="/personel">Personel</a>
            </li>
            <li>
              <a href="/useOfLibrary">Use Of Library</a>
            </li>
            <li>
              <a href="/aboutus">About Us</a>
            </li>
            <li>
              <a href="/contactus">Contact Us</a>
            </li>
          </ul>
        </nav>      
      </div>
      <img src={image1} alt="library banner" className="header-image" />
     
    </div>
  );
};

export default Header;
