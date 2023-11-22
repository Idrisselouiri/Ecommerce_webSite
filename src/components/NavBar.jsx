import React, { Component } from "react";
import "./NavbarStyling.css";
import { NavLink } from "react-router-dom";
import { FaRegHeart, FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

class NavBar extends Component {
  state = { cliked: false };
  handleClick = () => {
    this.setState({ cliked: !this.state.cliked });
  };
  render() {
    return (
      <header>
        <nav>
          <h1>Exclusive</h1>
          <ul className= {this.state.cliked ? "navbar active" :"navbar"}>
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
            <span>
              <FaCartShopping />
            </span>
          </div>
          <div className="hamburger-menu" onClick={this.handleClick}>
            {this.state.cliked ? <span><IoMdClose /></span> : <span><GiHamburgerMenu /></span>}
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
