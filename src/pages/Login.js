import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebaseConfig";
import { auth } from "../firebase";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate =useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before trying login
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect after successful login (optional)
      // 
      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed:", error.message);
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="cloud-box">
        <h2>Welcome to Hansel's Project</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
          <p className="signup-link">
            Don’t have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>

      <div className="sky-background">
        <div className="cloud" />
        <div className="cloud smaller" />
      </div>
    </div>
  );
}

export default LoginPage;
