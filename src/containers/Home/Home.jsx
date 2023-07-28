import React from "react";
import "./home.css";
import Botvec from '../../assets/homebottomvector.png';
import homevec from "../../assets/homevector.png";

const Home = React.memo(() => {
  return (
    <div id="home">
      <div className="pagedots">
        <div className="homeflex">
          <div className="vectorimg">
            <img src={homevec} alt="Home Vector" loading="lazy" />
          </div>
          <div className="content">
            <h1>Welcome To <span>Creative Carts</span></h1>
            <p>Personalized, Customize your experience with our exotic Products,
              Unique Gifts and photo Printing services.</p>
            <button><a href="#">Get Started</a></button>
            <div className="bottomvec"><img src={Botvec} alt="Bottom Vector" loading="lazy" /></div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
