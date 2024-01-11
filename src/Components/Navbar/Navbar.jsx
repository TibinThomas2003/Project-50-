// Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ cartItemCount }) => {
  // eslint-disable-next-line
  const [menu, setMenu] = useState("home");

  const handleMenuClick = (page) => {
    setMenu(page);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>TechBees</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => handleMenuClick("home")}>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li onClick={() => handleMenuClick("orders")}>
          <NavLink to="/orders" activeclassname="active">
            Orders
          </NavLink>
        </li>
        <li onClick={() => handleMenuClick("custom")}>
          <NavLink to="/custom" activeclassname="active">
            Custom PC
          </NavLink>
        </li>
        <li onClick={() => handleMenuClick("contact")}>
          <NavLink to="/contact" activeclassname="active">
            Contact
          </NavLink>
        </li>
        <li onClick={() => handleMenuClick("about")}>
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
        </li>
      </ul>
      <div className="nav-login-cart">
        <div className="login-links">
          <NavLink to="/login" activeclassname="active" className="login-link">
            Login
          </NavLink>
          <span className="separator"> | </span>
          <NavLink to="/signup" activeclassname="active" className="register-link">
            Register
          </NavLink>
        </div>

        <Link to="/cart">
          <img src={cartIcon} alt="" />
        </Link>
        {/* Display the cart item count */}
        <div className="nav-cart-count">{cartItemCount}</div>
      </div>
    </div>
  );
};

export default Navbar;
