import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import NavBar from "./components/NavBar";
import { Contact } from "./pages/Contact/Contact";
import { About } from "./pages/About/About";
import { ShoppingCartProvider } from "./pages/Home/shopingCart/context/ShopingCartContext";
import { Signup } from "./pages/registration/SignUp";
import { Login } from "./pages/registration/Login";
import { ShopingCart } from "./pages/Home/shopingCart/ShopingCart";

const App = () => {
  return (
    <Router>
      <ShoppingCartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="shopingCart" element={<ShopingCart />} />
        </Routes>
      </ShoppingCartProvider>
    </Router>
  );
};

export default App;
