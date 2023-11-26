import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export const SliderItem = ({ products, width }) => {
  return (
    <div className="carousel-item" key={products.id} style={{ width: width }}>
      <div className="carousel-item-text">
        <div className="title">
          <img src={products.logo} />
          <p>{products.title}</p>
        </div>
        <div className="description">
          <h1>{products.description}</h1>
        </div>
        <button>
          <a>Shop Now</a>
          <span>
            <FaArrowRightLong />
          </span>
        </button>
      </div>
      <img className="carousel-img" src={products.img} />
    </div>
  );
};
