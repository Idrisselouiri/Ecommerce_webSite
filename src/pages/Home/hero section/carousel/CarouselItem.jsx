import React from 'react';
import logo from './images/logo.png'
import { FaArrowRightLong } from "react-icons/fa6";


export const CarouselItem = ({ item, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
    
    <div className="carousel-item-text">
      <div className="title">
        <img src={logo} />
        <p>{item.title}</p>
      </div>
      <div className="description"><h1>{item.description}</h1></div>
      <button><a>Shop Now</a><span><FaArrowRightLong/></span></button>
      </div>
    <img className="carousel-img" src={item.icon} />
  </div>
  )
}
