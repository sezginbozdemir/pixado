import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import burger from "@/assets/burger.png";
import Button from "../buttons/Button";
import "./header.css";
import SideMenu from "./SideMenu";
import { AnimatePresence } from "framer-motion";
export type Menu = {
  name: string;
  subItems?: string[];
};

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string>("home");
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>("");
  const navigate = useNavigate();
  const location = useLocation();

  let hideTimeout: NodeJS.Timeout;

  const handleMouseEnter = (name: string) => {
    clearTimeout(hideTimeout);
    setHoveredMenu(name);
  };

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setHoveredMenu(null);
    }, 200);
  };

  const menuItems: Menu[] = [
    { name: "home" },
    {
      name: "servicii",
      subItems: ["branding", "online marketing", "web design"],
    },
    { name: "portfoliu" },
    { name: "contact" },
  ];
  const handleMenuClick = (menu: string): void => {
    setBurgerOpen(false);
    setActiveMenu(menu);
    const path = menu === "home" ? "/" : `/${menu}`;
    navigate(path);
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
              onMouseEnter={() => menu.subItems && handleMouseEnter(menu.name)}
              onMouseLeave={() => menu.subItems && handleMouseLeave()}
              key={menu.name}
              className="menu-item-wrapper"
            >
              <div
                className={`menu-item ${
                  activeMenu === menu.name ? "active" : ""
                }`}
                onClick={() => !menu.subItems && handleMenuClick(menu.name)}
              >
                <span className="menu-body"> {menu.name}</span>
              </div>
              <AnimatePresence mode="wait">
                {menu.subItems && hoveredMenu === menu.name && (
                  <motion.div
                    key="dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="menu-dropdown"
                  >
                    {menu.subItems.map((sub, idx) => (
                      <Link
                        to={`/${menu.name}/${sub.replace(/\s+/g, "-")}`}
                        key={idx}
                        className="menu-dropdown-item title-4"
                      >
                        {sub}
                        <span>Află mai multe</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
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
