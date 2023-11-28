import React from "react";
import "./CartShopStyling.css";
import { ProductCart } from "./dataProductCart/productCart";
import { CartItems } from "./CartItems";
import { useShoppingCart } from "./context/ShopingCartContext";
import { Link } from "react-router-dom";
import FormatCurrency from "./FormatCurrency";
export const ShopingCart = () => {
  const { cartItems } = useShoppingCart();
  return (
    <div className="cart-shop">
      <table>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quatity</th>
          <th>Subtotal</th>
          <th>Remove_Items</th>
        </tr>
        {cartItems.map((item) => (
          <CartItems key={item.id} {...item} />
        ))}
      </table>
      <div className="mini-container">
        <Link to={"/"}>Return To Shop</Link>
        <Link to={"/"}>Return To Shop</Link>
      </div>
      <div className="cart-total">
        <div className="box-totalCart">
          <h2>Cart Total</h2>
          <div>
            <span>Subtotal:</span>
            <h5>
              {" "}
              {FormatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = ProductCart.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </h5>
          </div>
          <div>
            <span>Shoping:</span>
            <h5>free</h5>
          </div>
          <div>
            <span>Total:</span>
            <h5>
              {" "}
              {FormatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = ProductCart.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </h5>
          </div>
          <button>Procees to checkout</button>
        </div>
      </div>
    </div>
  );
};
