import React from 'react'
import './footer.css'
import paymopts from '../../assets/paymentopts.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div id="footer">
      <div className="contento">
        <div className="title">
          <h1>Creative carts</h1>
          <h5>Creative Carts Ltd</h5>
          <p>+91 91100 66290</p>
          <p><FontAwesomeIcon icon={faPaperPlane} style={{color: "#ffffff",}}/> creativecarts.in@gmail.com</p>
          <a href="https://www.instagram.com/creativecarts.in"><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /> Creativecarts.in</a>
        </div>
        <div className="Links">
          <div className="ABOUTUS">
            <h1>About Us</h1>
            <ul>
              <li>
                <p><a href="#"><FontAwesomeIcon icon={faAngleRight} /> About Page</a></p>
                <p><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Terms and Conditions</a></p>
                <p><a href="#"><FontAwesomeIcon icon={faAngleRight} /> FAQ's</a></p>
              </li>
            </ul>
          </div>
          <div className="PRODUCTS">
          <h1>Products</h1>
            <ul>
              <li>
                <p><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Customised Mosaic Cups</a></p>
                <p><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Customizd Gift Frames</a></p>
                <p><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Photo Polaroids</a></p>
                <p><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Rings and Chains</a></p>
                <p><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Variety of Posters</a></p>
                <p><a href="#"><FontAwesomeIcon icon={faAngleRight} /> More Gifts</a></p>
              </li>
            </ul>
          </div>
          <div className="SERVICES">
          <h1>Services</h1>
            <ul>
              <li>
                <p><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Track Order</a></p>
                <p><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Shipping Policy</a></p>
                <p><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Shop Now</a></p>
                <p><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Login/Signup</a></p>
                <p><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Privacy Policy</a></p>
              </li>
            </ul>
          </div>
          <div className="HELP">
          <h1>Help</h1>
            <ul>
              <li>
                <p><a href="#"><FontAwesomeIcon icon={faAngleRight} />  My Profile</a></p>
                <p><a href="#"><FontAwesomeIcon icon={faAngleRight} />  Contact Us</a></p>
                <p><a href="#"><FontAwesomeIcon icon={faAngleRight} />  FAQ's</a></p>
                <p><a href="#"><FontAwesomeIcon icon={faAngleRight} />  Terms and Conditions</a></p>
                <p><a href="#"><FontAwesomeIcon icon={faAngleRight} />  Login Now</a></p>
                <p><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Contact Us</a></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img src={paymopts} className='paymopts'/>
    </div>
  )
}

export default Footer
