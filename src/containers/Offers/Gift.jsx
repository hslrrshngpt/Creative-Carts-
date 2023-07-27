import React from "react";
import './data.css'
export const Gifts = (props) => {
  const { id, productname, price, productimage,originalprice } = props.data;
  return (
    <div className="flex">
      <div className="screening">
        <div className="giftcontent">
          <img className="productimg" src={productimage} />
          <div className="name">
            <h4>{productname}</h4>
          </div>
          <button className="pricebtn2">
            <a href="">
              <p>
                <span>₹ {originalprice}/-</span> ₹ {price}/-
              </p>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
