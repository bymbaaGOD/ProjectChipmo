import React from "react";
import logo from '../../assets/logos/chipmo_logo.webp'
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
      <header className="header">
        
        <nav className="navContainer">
          <img src={logo} alt="logo" className="logo" />
          <div className="navLinks">
            <Link to="/"><li className="navItem">НҮҮР</li></Link>
            <Link to="aboutRFID"><li className="navItem">RFID ТУХАЙ</li></Link>
            <Link to="system"><li className="navItem">СИСТЕМ</li></Link>
            <Link to="product"><li className="navItem">БҮТЭЭГДЭХҮҮН</li></Link>
            <Link to="rfidCalculator"> <li className="navItem">ТООЦООЛУУР</li></Link>
            <Link to="contact "><li className="navItem">ХОЛБОГДОХ</li></Link>
            <Link to="Login "><li className="navItem">НЭВТРЭХ</li></Link>
            <li className="navItem">ҮНИЙН САНАЛ</li>
            <li className="navItem">MN/EN</li>
          </div>
           <button className="mobileMenuButton" aria-label="Toggle menu">
            <i className="menuIcon">☰</i>
          </button>
        </nav>
      </header>
  );    
}
                                                                                                                                                                               