import { useEffect } from "react";
import { motion } from "framer-motion";
import "./header.css";

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
  items: string[];
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
          onClick={() => handleMenuClick(item)}
          className={`side-menu-item menu-body-bold ${
            activeMenu === item ? "active" : ""
          }`}
        >
          {item}
        </div>
      ))}
    </motion.div>
  );
};

export default SideMenu;
