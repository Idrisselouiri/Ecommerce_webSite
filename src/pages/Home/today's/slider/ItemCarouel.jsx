import React from "react";
import { CiStar } from "react-icons/ci";

export const ItemCarouel = ({ id, name, price, imgUrl }) => {
  return (
    <div className="card" key={id}>
      <div className="images">
        <img src={imgUrl} />
      </div>
      <div className="card-body">
        <div className="heading">
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
        <div className="star-icons">
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </div>
        <button className="btn-add">Add to Cart</button>
      </div>
    </div>
  );
};
