import React from 'react'

const Products = () => {
  return (
    <div id="Products">
      <div className="overlay">
        <div className="background"></div>
        <div className="framecontent">
          <div className="frametitle"></div>
          <div className="framescreening"></div>
          <button className='shopbtn'><a href="">Shop Now !</a></button>
        </div>
        <div className="background"></div>
        <div className="productcontent">
          <div className="producttitle"></div>
          <div className="productscreening"></div>
          <button className='shopbtn'><a href="">Shop Now !</a></button>
        </div>
      </div>
    </div>
  )
}

export default Products
