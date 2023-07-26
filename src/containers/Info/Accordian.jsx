import React, { useState } from "react";
import "./info.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'
const Accordian = ({ question, answer }) => {
  const [show,setShow] = useState(false);
  return (
    <div className="overlay1">
      <div className="accordian">
        <p className="indicators" onClick={() => setShow(!show)}>{show?  <FontAwesomeIcon className="down" icon={faAngleDown} />:<FontAwesomeIcon className="right" icon={faAngleRight} />}</p>
        <h3 className="question">{question}</h3>
      </div>
      { show && <p className="answers">{answer}</p>}
    </div>
  );
};

export default Accordian;
