import React, { useState, useEffect, useRef } from 'react';
import './offer.css'; // Create your own CSS file to style the carousel.
import camoffer1 from '../../assets/camerahomepage.png';
import camoffer2 from '../../assets/camerahomepage.png';
import { FRAMEOFFERS } from './frame.js';
import { GIFTOFFERS } from './gift.js';
import { Product } from './Frame.jsx';
import { Gifts } from './Gift.jsx';
import giftoffer1 from '../../assets/Gifthomepage.png';
import giftoffer2 from '../../assets/Gifthomepage.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Products = () => {
  // FRAMEOFFERS carousel state
  const [frameCurrentIndex, setFrameCurrentIndex] = useState(0);
  const frameCarouselRef = useRef(null);

  useEffect(() => {
    const scrollNextFrame = () => {
      const containerWidth = frameCarouselRef.current.clientWidth;
      setFrameCurrentIndex((prevIndex) =>
        (prevIndex + 1) % FRAMEOFFERS.length
      );
      frameCarouselRef.current.scrollLeft += containerWidth;
    };

    const frameScrollInterval = setInterval(scrollNextFrame, 444444000);

    return () => clearInterval(frameScrollInterval);
  }, []);

  const handleFramePrevClick = () => {
    const containerWidth = frameCarouselRef.current.clientWidth;
    frameCarouselRef.current.scrollLeft -= containerWidth;
  };

  const handleFrameNextClick = () => {
    const containerWidth = frameCarouselRef.current.clientWidth;
    frameCarouselRef.current.scrollLeft += containerWidth;
  };

  // GIFTOFFERS carousel state
  const [giftCurrentIndex, setGiftCurrentIndex] = useState(0);
  const giftCarouselRef = useRef(null);

  useEffect(() => {
    const scrollNextGift = () => {
      const containerWidth = giftCarouselRef.current.clientWidth;
      setGiftCurrentIndex((prevIndex) =>
        (prevIndex + 1) % GIFTOFFERS.length
      );
      giftCarouselRef.current.scrollLeft += containerWidth;
    };

    const giftScrollInterval = setInterval(scrollNextGift, 444444000);

    return () => clearInterval(giftScrollInterval);
  }, []);

  const handleGiftPrevClick = () => {
    const containerWidth = giftCarouselRef.current.clientWidth;
    giftCarouselRef.current.scrollLeft -= containerWidth;
  };

  const handleGiftNextClick = () => {
    const containerWidth = giftCarouselRef.current.clientWidth;
    giftCarouselRef.current.scrollLeft += containerWidth;
  };

  // Looping variables
  const maxLoops = 100;
  const loopInterval = 5000; // 5 seconds
  const [remainingLoops, setRemainingLoops] = useState(maxLoops);

  // Start the loop timer
  useEffect(() => {
    const loopIntervalId = setInterval(() => {
      setRemainingLoops((prevLoops) => prevLoops - 1);
    }, loopInterval);

    return () => clearInterval(loopIntervalId);
  }, []);

  // Reset the loop count and refresh the loop when loops are completed
  useEffect(() => {
    if (remainingLoops === 0) {
      setFrameCurrentIndex(0);
      setGiftCurrentIndex(0);
      setRemainingLoops(maxLoops);
    }
  }, [remainingLoops]);

  // ... (rest of the code)

  return (
    <div id="Products">
       <div id="Products">
      <div className="overlay">
        <div className="background1">
          <img src={camoffer1} alt="camoffer1" />
        </div>
        <div className="background2">
          <img src={giftoffer1} alt="giftoffer1" />
        </div>
        <div className="framecontent">
          <div className="frametitle">
            <h1>latest Offers on Frames</h1>
          </div>
          <button className="prevbtn" onClick={handleFramePrevClick}>
            <FontAwesomeIcon icon={faPlay} rotation={180} />
          </button>
          <button className="nextbtn" onClick={handleFrameNextClick}>
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <div className="framescreening" ref={frameCarouselRef}>
            {Array.from({ length: 100 }).map((_, index) =>
              FRAMEOFFERS.map((product, i) => (
                <Product key={`frame-${index * FRAMEOFFERS.length + i}`} data={product} />
              ))
            )}
          </div>
          <button className="shopbtn">
            <a href="">Shop Now !</a>
          </button>
        </div>
        <div className="productcontent">
          <div className="background3">
            <img src={camoffer2} alt="camoffer2" />
          </div>
          <div className="producttitle">
            <h1>Latest Offers on Gifts</h1>
          </div>
          <button className="prevbtn" onClick={handleGiftPrevClick}>
            <FontAwesomeIcon icon={faPlay} rotation={180} />
          </button>
          <button className="nextbtn" onClick={handleGiftNextClick}>
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <div className="tscreening" ref={giftCarouselRef}>
            {Array.from({ length: 100 }).map((_, index) =>
              GIFTOFFERS.map((product, i) => (
                <Gifts key={`gift-${index * GIFTOFFERS.length + i}`} data={product} />
              ))
            )}
          </div>
          <button className="shopbtn">
            <a href="">Shop Now !</a>
          </button>
          <div className="background4">
            <img src={giftoffer2} alt="giftoffer2" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Products;
