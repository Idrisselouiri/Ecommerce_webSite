import React from 'react'
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import {  Home } from "./pages/Home/Home";
import  NavBar  from "./components/NavBar";
import {Contact} from './pages/Contact/Contact';
import {About} from './pages/About/About';
import  {SignUp}  from './pages/SignUp/SignUp';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App