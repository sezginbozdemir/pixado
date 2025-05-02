import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "./Header";
import "./header.css";
import { Link } from "react-router-dom";

const sidebar = {
  open: {
    clipPath: `circle(500px at 100% 0px)`,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      delay: 0.1,
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

type Props = {
  isOpen: boolean;
  items: Menu[];
  activeMenu: string;
  handleMenuClick: (menu: string) => void;
  onClose: () => void;
};

const SideMenu: React.FC<Props> = ({
  isOpen,
  items,
  activeMenu,
  handleMenuClick,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpand = (name: string) => {
    setExpandedItem((prev) => (prev === name ? null : name));
  };
  return (
    <motion.div
      className="burger-overlay"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={sidebar}
    >
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            if (item.subItems) {
              toggleExpand(item.name);
            } else {
              handleMenuClick(item.name);
              onClose();
            }
          }}
          className={`side-menu-item ${
            activeMenu === item.name ? "active" : ""
          }`}
        >
          <span className="title-4">{item.name}</span>
          <AnimatePresence mode="wait">
            {item.subItems && expandedItem === item.name && (
              <motion.div
                key="sidebar"
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="subitems-container"
              >
                {item.subItems.map((sub, subIndex) => (
                  <Link
                    key={subIndex}
                    to={`/${item.name}/${sub.replace(/\s+/g, "-")}`}
                    className="subitem-link"
                    onClick={onClose}
                  >
                    {sub}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  );
};

export default SideMenu;
