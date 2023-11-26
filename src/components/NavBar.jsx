import React, { useState } from "react";
import "./NavbarStyling.css";
import { NavLink } from "react-router-dom";
import { FaRegHeart, FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { useShoppingCart } from "../pages/Home/shopingCart/context/ShopingCartContext";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState(false);
  const { openCart, cartQuantity } = useShoppingCart();
  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <header className={color ? "header-bg" : ""}>
      <nav>
        <h1>Exclusive</h1>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/signup"}>Sign Up</NavLink>
          </li>
        </ul>
        <div className="mini-box">
          <form>
            <input
              type="text"
              id="search"
              placeholder="What are you looking for?"
            />
            <span>
              <CiSearch />
            </span>
          </form>
          <div className="icons">
            <span>
              <FaRegHeart />
            </span>
            {cartQuantity > 0 && (
              <span>
                <FaCartShopping onClick={openCart} />
              </span>
            )}
          </div>
        </div>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
