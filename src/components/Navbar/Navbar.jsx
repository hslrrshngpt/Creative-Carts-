import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <div id="navbar">
        <div className="logo">
            <img src={logo} alt="Creative Carts" />
        </div>
        <div className="tabs">
            <h5><a href="">Homepage</a></h5>
            <h5><a href="">Shopping and Services</a></h5>
            <h5><a href="">Contact Info</a></h5>
            {/* Try applying react icons there */}
            <h5><a href="">FAQ's</a></h5>
            <h5><a href="">Login</a></h5>
        </div>
    </div>
  )
}

export default Navbar
