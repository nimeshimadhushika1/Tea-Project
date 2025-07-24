
// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // if needed

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple mock validation
    if (email=="g@gmail.com" && password=="admin") {
      // ✅ Redirect to dashboard
      navigate("/dashboard");
    } else {
      alert("Please enter both email and password.");
    }
    if (email === "admin@admin.com" && password === "admin123") {
    navigate("/admin"); // Redirect to Admin Dashboard
  } else {
    navigate("/dashboard"); // Redirect to User Dashboard
  }
  };
  

  return (
    <>

    <div className="login-container">

    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
        </div>

    </>
    
  );
};

export default Login;
