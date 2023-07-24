import React from 'react'
import './offer.css'
import camoffer1 from '../../assets/camerahomepage.png'
import camoffer2 from '../../assets/camerahomepage.png'
import giftoffer1 from '../../assets/Gifthomepage.png'
import giftoffer2 from '../../assets/Gifthomepage.png'
const Products = () => {
  return (
    <div id="Products">
      <div className="overlay">
        <div className="background1"><img src={camoffer1} alt="camoffer1" /></div>
        <div className="background2"><img src={giftoffer1} alt="giftoffer1" /></div>
        <div className="framecontent">
          <div className="frametitle"><h1>latest Offers on Frames</h1></div>
          <div className="framescreening"></div>
          <button className='shopbtn'><a href="">Shop Now !</a></button>
        </div>
        <div className="productcontent">
        <div className="background3"><img src={camoffer2} alt="camoffer2" /></div>
          <div className="producttitle"><h1>Latest Offers on Gifts</h1></div>
          <div className="productscreening"></div>
          <button className='shopbtn'><a href="">Shop Now !</a></button>
        <div className="background4"><img src={giftoffer2} alt="giftoffer2" /></div>
        </div>
      </div>
    </div>
  )
}

export default Products
