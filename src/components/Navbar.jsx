import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO + NAME */}
      <div className="logo-container">
        <img src="/logo.jpg" alt="logo" className="logo-img" />
        <h2 className="logo-text">Cpt.roger.dev</h2>
      </div>

      {/* NAV LINKS */}
  <ul className={`nav-links ${open ? "active" : ""}`}>
  <li><a href="/">Home</a></li>
  <li><a href="#projects">Projects</a></li>
</ul>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  );
};

export default Navbar;