// SignUp.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css"; // Create styles for the signup form

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to backend)
    console.log("Sign Up Data:", formData);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up —</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <div className="form-footer">
          <Link to="/forgot-password" className="forget-pass">Forgot your password?</Link>
          <Link to="/login" className="login">Login Here</Link>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
