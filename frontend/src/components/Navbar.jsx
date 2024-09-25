import React from "react";
import { Link } from "react-scroll"; // react-scroll for smooth scrolling

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <p>Nexan 💪 Fitness</p>
      </div>
      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="navbar-menu">
        <li>
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="workout_session" smooth={true} duration={500}>
            Workouts
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth={true} duration={500}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="pricing" smooth={true} duration={500}>
            Pricing
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="bmi" smooth={true} duration={500}>
            BMI Calculator
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
