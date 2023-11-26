import React, { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import ShoppingCart from "../ShopingCart";
import { useEffect } from "react";
const ShoppingCartContext = createContext({});
const initialCartItems = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };
  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartQuantity,
        cartItems,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
