import React from 'react'
import './offer.css'
import camoffer1 from '../../assets/camerahomepage.png'
import camoffer2 from '../../assets/camerahomepage.png'
import {FRAMEOFFERS} from './frame.js'
import {GIFTOFFERS} from'./gift.js'
import { Product } from './Frame.jsx'
import {Gifts} from './Gift.jsx'
import giftoffer1 from '../../assets/Gifthomepage.png'
import giftoffer2 from '../../assets/Gifthomepage.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay}  from '@fortawesome/free-solid-svg-icons'


const Products = () => {
  return (
    <div id="Products">
      <div className="overlay">
        <div className="background1"><img src={camoffer1} alt="camoffer1" /></div>
        <div className="background2"><img src={giftoffer1} alt="giftoffer1" /></div>
        <div className="framecontent">
          <div className="frametitle"><h1>latest Offers on Frames</h1></div>
            <button className='prevbtn'><FontAwesomeIcon icon={faPlay} rotation={180} /></button>
            <button className='nextbtn'><FontAwesomeIcon icon={faPlay} /></button>
            
          <div className="framescreening">
            {FRAMEOFFERS.map((product) => <Product data={product}/>)}</div>
          <button className='shopbtn'><a href="">Shop Now !</a></button>
        </div>
        <div className="productcontent">
        <div className="background3"><img src={camoffer2} alt="camoffer2" /></div>
          <div className="producttitle"><h1>Latest Offers on Gifts</h1></div>
          <div className="productscreening">{GIFTOFFERS.map((product) => <Gifts data={product}/>)}</div>
          <button className='shopbtn'><a href="">Shop Now !</a></button>
        <div className="background4"><img src={giftoffer2} alt="giftoffer2" /></div>
        </div>
      </div>
    </div>
  )
}

export default Products
