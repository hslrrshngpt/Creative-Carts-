import React from "react";
import "./about.css";
import camvec from '../../assets/camerahomepage.png'
import Introduction from "../../assets/logo.png";
const About = () => {
  return (
    <div id="About">
      <div className="about">
        <div className="contend">
          <div className="logos">
            <img src={Introduction} />
          </div>
          <p>
          Welcome to Creative Carts, your one-stop destination for personalized photo printing services and unique gifts. Our diverse collection includes personalized mugs, custom phone covers, trendy t-shirts, cozy pillows, elegant rings, eye-catching chains, and bespoke bottle prints. With a range of options from classic frames to contemporary designs, we ensure your precious moments are displayed with elegance and style. Experience the joy of preserving your cherished memories with our exceptional craftsmanship and attention to detail. <br /><br/>Follow us on Instagram <a href="https://www.instagram.com/creativecarts.in">@creativecarts.in</a> for inspiration,<br/>and email us at <span>creativecarts.in@gmail.com</span> for any inquiries.
          </p>
        </div>
        <img className="aboutlogo" src={camvec} />
      </div>
    </div>
  );
};

export default About;
