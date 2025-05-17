import React from "react";
import logo from '../../assets/logos/chipmo_logo.webp'
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo"/>
      <nav className="nav">
       <div className="nav-link-left">
          <strong className="nav-link">НҮҮР</strong>
          <strong className="nav-link">RFID ТУХАЙ</strong>
          <strong className="nav-link">СИСТЕМ</strong>
          <strong className="nav-link">БҮТЭЭГДЭХҮҮН</strong>
          <strong className="nav-link">ТООЦООЛУУР</strong>
          <strong className="nav-link">ХОЛБОГДОХ</strong>
       </div>
       <div className="nav-link-right">
         <strong className="nav-link">ҮНИЙН САНАЛ</strong>
         <strong className="nav-link">MN/ENG</strong>
       </div>
      </nav>
    </div>
  );    
}
                                                                                                                                                                               