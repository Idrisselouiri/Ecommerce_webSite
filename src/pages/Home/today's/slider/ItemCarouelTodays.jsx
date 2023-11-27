import React from "react";
import { CiStar } from "react-icons/ci";

export const ItemCarouelTodays = ({ id, name, price, img }) => {
  return (
    <div className="card" key={id}>
      <img src={img} />
      <div className="text-card">
        <button className="btn-add">Add to Cart</button>
        <h3>{name}</h3>
        <p>
          ${price} <a>$160</a>
        </p>
        <div className="star-icons">
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </div>
      </div>
    </div>
  );
};
