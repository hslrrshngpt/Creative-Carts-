import React from "react";
import "./data.css";
import "./frame.js"
export const Product = (props) => {
  const { productname, originalprice, price, productimage, productdesc } =
    props.data;
  return (
    <div className="flexbox">
      <div className="productscreening">
        <img className="imgdiv" src={productimage} />
        <div className="informationdiv">
          <div className="infodiv">
            <h1>{productname}</h1>
            <p>{productdesc}</p>
          </div>
          <button className="pricebtn">
            <a href="#">
              <p>
                <span>-₹{originalprice}/-</span> ₹{price}/-
              </p>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
