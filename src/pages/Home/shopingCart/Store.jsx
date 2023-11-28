import React from "react";
import "./StoreStyling.css";
import { ProductCart } from "./dataProductCart/productCart";
import StoreItems from "./StoreItems";

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
          <StoreItems product={product} />
        ))}
      </div>
    </section>
  );
};

export default Store;
