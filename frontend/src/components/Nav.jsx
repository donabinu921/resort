import React, { useState, useEffect, useRef } from "react";
import "../styles/Nav.css";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("HOME");
  const menuRef = useRef(null);

  const menuItems = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "TESTIMONIALS", link: "#testimonials" },
    { name: "ROOMS", link: "#rooms" },
    { name: "BOOKINGS", link: "#bookings" },
    { name: "CONTACT US", link: "#contact" },
  ];

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="nav">
      <div className="option1" ref={menuRef} onClick={() => setIsOpen(!isOpen)}>
        <FaBars className="hamburger-icon" />
        <span className="selected-menu">{selectedMenu}</span>

        {isOpen && (
          <div className="menu">
            {menuItems.map((item) => (
              <a key={item.name} href={item.link} onClick={() => handleMenuClick(item.name)}>
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="option2">
        <a href="#home">KADUVAKANAM</a>
      </div>
      <div className="option3">
        <a href="#home">BOOK NOW</a>
      </div>
    </div>
  );
};

export default Nav;
