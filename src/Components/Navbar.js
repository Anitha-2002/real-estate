// NavBar.js
import React from "react";
import "./Navbar.css"; // Import your CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="left-icon">
        <FontAwesomeIcon icon={faCircle} className="circle-icon" />{" "}
        {/* Leftmost icon */}
      </div>
      {/* <div className="brand">Your Brand</div> Your brand/logo */}
      <div className="right-icon">
        {" "}
        {/* Rightmost icon */}
        <FontAwesomeIcon icon={faBars} className="bars-icon" />
      </div>
    </nav>
  );
};

export default NavBar;
