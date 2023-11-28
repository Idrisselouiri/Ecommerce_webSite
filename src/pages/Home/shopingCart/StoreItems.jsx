import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import FormatCurrency from "./FormatCurrency";
import { useShoppingCart } from "./context/ShopingCartContext";

const StoreItems = ({ product }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(product.id);
  return (
    <div className="box" key={product.id}>
      <div className="box-image">
        <img src={product.imgUrl} />
      </div>
      <h3>{product.name}</h3>
      <div className="prrvnumb">
        <a>{FormatCurrency(product.price)}</a>
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
      {quantity === 0 ? (
        <button
          className="btn-add"
          onClick={() => increaseCartQuantity(product.id)}
        >
          Add To Cart
        </button>
      ) : (
        <div className="mini-container">
          <div className="mini-box">
            <button onClick={() => decreaseCartQuantity(product.id)}>-</button>
            <div>
              <span>{quantity} in cart</span>
            </div>
            <button onClick={() => increaseCartQuantity(product.id)}>+</button>
          </div>
          <button className="btn-rm" onClick={() => removeFromCart(product.id)}>
            Remove
          </button>
        </div>
      )}
    </div>
  );
};
export default StoreItems;
