import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate(); // ✅ Moved INSIDE the component

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("🔴 Register button clicked");

    try {
      const res = await axios.post("api/auth/register", {
        username,
        email,
        password,
      });

      console.log("Response status:", res.status);

      if (res.status === 200 || res.status === 201) {
        alert("Registration successful! Redirecting to login...");
        navigate("/login");
      } else {
        alert("Unexpected response status.");
      }
    } catch (err) {
      console.error("Registration error:", err?.response?.data || err.message);
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h1>Register Component Loaded</h1>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Username:</label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Password:</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
