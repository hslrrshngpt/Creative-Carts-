import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'
import {} from 'react-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretRight}  from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <div id="navbar">
        <div className="logo">
            <img src={logo} alt="Creative Carts" />
        </div>
        <div className="tabs">
            <h5><a href="#">Homepage</a></h5>
            <h5><a href="#">Shopping and Servicesㅤ<FontAwesomeIcon icon={faCaretRight} className='caretdown'/> </a></h5>
            <h5><a href="#">Contact Infoㅤ< FontAwesomeIcon icon={faCaretRight} className='caretdown'/></a></h5>
            <h5><a href="#">FAQ's</a></h5>
            <h5><a href="#">Login</a></h5>
        </div>
    </div>
  )
}

export default Navbar
