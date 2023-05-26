import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import "../styles/Navbar.css";

import brand from "../img/brand.png";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Techniques",
    path: "/techniques",
  },
  {
    name: "History",
    path: "/history",
  },
  {
    name: "Competitions",
    path: "/competitions",
  },
  {
    name: "Philosophy",
    path: "/philosophy",
  },
];

const Navbar = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth <= 768);
  const [buttonActive, setButtonActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth <= 768);
      setButtonActive(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuButton = () => {
    setButtonActive(!buttonActive);
  };

  const handleNavLink = () => {
    setButtonActive(false);
  }

  const navListFullScreen = navItems.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} onClick={handleNavLink}>
        {item.icon}
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav>
      <section className="brand">
        <img src={brand} alt="brand logo" />
      </section>
      {windowSize && (
        <button
          className={buttonActive ? "activeButton" : ""}
          onClick={handleMenuButton}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
      )}
      <ul className={buttonActive ? "mobileMenu active" : "mobileMenu"}>
        {navListFullScreen}
      </ul>
    </nav>
  );
};

export default Navbar;
