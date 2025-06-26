import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext"; // ✅ added

function Navbar() {
  const {
    state: { cartItems },
  } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">G-Shop</Link>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li>
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} /> ({cartItems.length})
            </Link>
          </li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          
        </ul>
        <div className="navbar-icons">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <FontAwesomeIcon icon={faCog} className="icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
