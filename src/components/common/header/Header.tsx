import React from "react";
import logo from "../../../assets/logo.png";
import burger from "../../../assets/burger.png";
import Button from "../buttons/Button";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="menu-bar">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="menu-items">
          <div className="menu-item menu-body">Home</div>
          <div className="menu-item menu-body">Servicii</div>
          <div className="menu-item menu-body">Portfoliu</div>
          <div className="menu-item menu-body">Contact</div>
        </div>
        <div className="contact-container">
          <Button
            className="menu-button button-body"
            text="Contacteaza-ne"
          ></Button>
          <div className="burger-menu">
            <img className="burger-menu-icon" src={burger} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
