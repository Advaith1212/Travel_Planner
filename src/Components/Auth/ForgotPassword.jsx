import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Perform forgot password logic here (e.g., API call, send reset email)
    console.log("Reset Password:", email);
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
      <p>
        Remember your password? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;