import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav style={{ padding: "1rem", background: "#f0f0f0", display: "flex", justifyContent: "space-between" }}>
      <div>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/products" style={{ margin: "0 10px" }}>Products</Link>
        {token && (
          <Link to="/cart" style={{ margin: "0 10px" }}>Cart</Link>
        )}
      </div>

      <div>
        {!token ? (
          <>
            <Link to="/login" style={{ margin: "0 10px" }}>Login</Link>
            <Link to="/register" style={{ margin: "0 10px" }}>Register</Link>
          </>
        ) : (
          <>
            <span style={{ marginRight: "10px" }}>Welcome, {user?.username || "User"}</span>
            <button onClick={handleLogout} style={{ padding: "5px 10px", cursor: "pointer" }}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
