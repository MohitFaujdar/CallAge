import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";

const NavComp = () => {
  const [sticky, setsticky] = useState(false);

  useEffect(() => {
    return () => {
      window.addEventListener("scroll", () => {
        window.scrollY > 50 ? setsticky(true) : setsticky(false);
      });
    };
  }, []);

  const [mobileMenu, setmobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setmobileMenu(false) : setmobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""} `}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default NavComp;