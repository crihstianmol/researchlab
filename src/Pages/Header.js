import React from "react";
import Logo from "../img/Logo.png";
import sytles from "./styles.css";

function Header() {
  return (
    
      <nav id="Header-container">
        <div id="navbar-logo">
          <img src={Logo} alt="Logo" href="!#" />
        </div>
      </nav>
    
  );
}

export default Header;
