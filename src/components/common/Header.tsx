import React from "react";
import logo from "../../assets/logo.png";
import burger from "../../assets/burger.png";
import Title from "./Title";
import Text from "./Text";
import Button from "./Button";
import "./common.css";
const Header = () => {
  return (
    <>
      <div className="menu-bar">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="menu-items">
          <div className="menu-item">
            <Title variant="menu-body">Home</Title>
          </div>
          <div className="menu-item">
            <Title variant="menu-body">Servicii</Title>
          </div>
          <div className="menu-item">
            <Title variant="menu-body">Portfoliu</Title>
          </div>
          <div className="menu-item">
            <Title variant="menu-body">Contact</Title>
          </div>
        </div>
        <div className="contact-container">
          <Button
            className="menu-button"
            text=<Text variant="button-body">Contacteaza-ne</Text>
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
