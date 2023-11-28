import React from "react";
import { useShoppingCart } from "./context/ShopingCartContext";
import { ProductCart } from "./dataProductCart/productCart";
import FormatCurrency from "./FormatCurrency";

export const CartItems = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const item = ProductCart.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <tr>
      <td className="imageName">
        <img src={item.imgUrl} />
        <p>{item.name}</p>
      </td>
      <td>{FormatCurrency(item.price)}</td>
      <td>{quantity > 1 && <a>x{quantity}</a>}</td>
      <td>{FormatCurrency(item.price * quantity)}</td>
      <td>
        <button
          className="btn-remove-cart"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};
