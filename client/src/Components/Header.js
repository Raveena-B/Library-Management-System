import React from "react";
import image2 from "../asserts/images/2.png";
import image3 from "../asserts/images/3.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
          <div className="text-email">info@nipm.gov.lk</div>
          <FontAwesomeIcon icon={faPhone} className="phone-icon" />
          <div className="text-phone"> +94 11-2770232</div>
        </div>
      </div>
      <div className="header">
        <div className="space" />
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="dropdown">
              <Link to="/e-resources">E-Resources</Link>
              <div className="dropdown-content">
                <Link to="#">E - Database</Link>
                <Link to="#">E - Books</Link>
                <Link to="#">E - Journals</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link to="/personnel">Personnel</Link>
              <div className="dropdown-content">
                <Link to="/staff">Staff</Link>
                <Link to="/librarian">Librarian</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link to="/useOfLibrary">Use Of Library</Link>
              <div className="dropdown-content">
                <Link to="/membershipcategory">Membership Category</Link>
                <Link to="/openinghours">Opening Hours</Link>
                <Link to="/borrow">Borrow , Return & Renew</Link>
                <Link to="/facilities">Facilities</Link>
                <Link to="/services">Services</Link>
                <Link to="/userguides">User Guides</Link>
                <Link to="/faq">FAQ</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link to="/aboutus">About Us</Link>
              <div className="dropdown-content">
                <Link to="/vision">Vision & Mission</Link>
                <Link to="/history">History</Link>
                <Link to="/privacypolicy">Privacy & Policies</Link>
                <Link to="/rulesregulations">Rules & Regulations</Link>
                <Link to="/libgallery">Library Gallery</Link>
              </div>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
     
    </div>
  );
};

export default Header;
