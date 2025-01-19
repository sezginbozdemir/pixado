import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import burger from "../../../assets/burger.png";
import Button from "../buttons/Button";
import "./header.css";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("Home");

  const menuItems = ["Home", "Servicii", "Portfoliu", "Contact"];

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <>
      <div className="menu-bar">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="menu-items">
          {menuItems.map((menu) => (
            <div
              key={menu}
              className={`menu-item menu-body ${
                activeMenu === menu ? "active" : ""
              }`}
              onClick={() => handleMenuClick(menu)}
            >
              {menu}
            </div>
          ))}
        </div>
        <div className="contact-container">
          <Button
            className="menu-button button-body"
            text="Contacteaza-ne"
          ></Button>
          <div className="burger-menu">
            <img className="burger-menu-icon" src={burger} alt="Menu" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
