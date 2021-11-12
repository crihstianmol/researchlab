import React from "react";
import Logo from "../img/Logo.png";

function Header() {
  return (
    <Paper elevation={5}>
      <div className="header-components">
        <img src={Logo} alt="Logo" href="!#" />
      </div>
    </Paper>
  );
}

export default Header;
