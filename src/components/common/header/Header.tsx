import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";
import burger from "../../../assets/burger.png";
import Button from "../buttons/Button";
import "./header.css";
import SideMenu from "./SideMenu";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string>("home");
  const [burgerOpen, setBurgerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems: string[] = ["home", "servicii", "portfoliu", "contact"];

  const handleMenuClick = (menu: string): void => {
    setActiveMenu(menu);
    const path = menu === "home" ? "/" : `/${menu}`;
    navigate(path);
    setBurgerOpen(false);
  };

  useEffect(() => {
    const currentPath = location.pathname.split("/")[1] || "home";
    setActiveMenu(currentPath);
  }, [location]);
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
            onClick={() => handleMenuClick("contact")}
          />
          <div
            className="burger-menu"
            onClick={() => setBurgerOpen((prev) => !prev)}
          >
            <img className="burger-menu-icon" src={burger} alt="Menu" />
          </div>
        </div>
      </div>
      <AnimatePresence>
        <SideMenu
          onClose={() => setBurgerOpen(false)}
          handleMenuClick={handleMenuClick}
          activeMenu={activeMenu}
          items={menuItems}
          isOpen={burgerOpen}
        />
      </AnimatePresence>
    </>
  );
};

export default Header;
