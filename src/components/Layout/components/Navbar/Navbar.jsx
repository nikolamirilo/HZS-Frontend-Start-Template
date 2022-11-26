import React from "react";
import logo from "../../../../assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navigation">
        <div className="links">
          <button>Home</button>
          <button>Contact</button>
          <button>Photos</button>
          <button>Add Photo</button>
          <button>Change Theme</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
