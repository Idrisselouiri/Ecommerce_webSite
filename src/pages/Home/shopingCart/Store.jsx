import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./StoreStyling.css";
import { ProductCart } from "./dataProductCart/productCart";

const Store = () => {
  return (
    <section className="shoping-cart">
      <div className="title-products">
        <div className="text">
          <div className="square"></div>
          <p>Our Products</p>
        </div>
        <h1>Explore Our Products</h1>
      </div>
      <div className="container-product">
        {ProductCart.map((product) => (
          <div className="box" key={product.id}>
            <div className="box-image">
              <img src={product.imgUrl} />
            </div>
            <h3>{product.name}</h3>
            <div className="prrvnumb">
              <a>{product.price}</a>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStarHalfAlt />
              </span>
              <h5>{product.reviews}</h5>
            </div>
            <button className="btn-add_to_cart">Add To Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Store;
