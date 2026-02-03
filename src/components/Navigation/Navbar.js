import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/icon-portfolio.png";
import { Link, animateScroll as scroll } from "react-scroll";
import contact from "../../assets/contact.png";
import { RiMenuFoldFill, RiMenuAddFill } from "react-icons/ri";
import menu from "../../assets/menu_open.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const scrollToTop = () => {
    scroll.scrollToTop(); // Function to scroll to the top
  };
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" onClick={scrollToTop} />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className="desktopMenuListItem"
        >
          About Me
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItem"
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItem"
        >
          Contact
        </Link>
      </div>
      <Link
        className="desktopMenuBtn"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <img src={contact} alt="" className="desktopMenuImg" />
        Contact Me
      </Link>

      <img
        src={menu}
        alt="menu"
        className="mobilemenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className="listItem"
        >
          About Me
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="listItem"
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="listItem"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
