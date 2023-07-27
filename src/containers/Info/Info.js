// Info.js
import React, { useState } from "react";
import { queries } from "./api";
import sourcecomponent from "../../assets/Faqs.png";
import Accordian from "./Accordian";

const Info = () => {
  const [data, setData] = useState(queries);

  return (
    <div className="container">
      <div className="sometitle">
        <div className="embed"></div>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="flexboxfaq">
        <section className="questionaire">
          {data.map((curElm) => (
            <Accordian key={curElm.id} {...curElm} />
          ))}
        </section>
        <img src={sourcecomponent} alt="FAQs" className="faqimg" />
      </div>
      <button className="moreFAQs">
        <a href="#">More FAQs</a>
      </button>
    </div>
  );
};

export default Info;
