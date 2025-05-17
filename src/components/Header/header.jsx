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
            <li className="navItem">НҮҮР</li>
            <li className="navItem">RFID ТУХАЙ</li>
            <li className="navItem">СИСТЕМ</li>
            <li className="navItem">БҮТЭЭГДЭХҮҮН</li>
            <li className="navItem">ТООЦООЛУУР</li>
            <li className="navItem">ХОЛБОГДОХ</li>
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
                                                                                                                                                                               