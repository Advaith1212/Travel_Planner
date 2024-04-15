import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Perform sign-in logic here (e.g., API call, authentication)
    console.log("Sign In:", email, password);
    // Assuming authentication is successful
    setLoginSuccess(true);
  };

  const handleRedirect = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Sign In</h2>
      {loginSuccess ? (
        <div>
          <p>Login successful!</p>
          <p>Do you want to go back to the home page?</p>
          <button onClick={handleRedirect} style={{ backgroundColor: '#2D9596', color: '#fff', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginRight: '10px' }}>Yes</button>
          <button onClick={() => setLoginSuccess(false)}>No</button>
        </div>
      ) : (
        <form onSubmit={handleSignIn} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%', boxSizing: 'border-box' }}
            />
          </div>
          <button type="submit" style={{ backgroundColor: '#2D9596', color: '#fff', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Sign In</button>
        </form>
      )}
      <p>
        Don't have an account? <Link to="/Register">Sign Up</Link>
      </p>
      <p>
        Forgot password? <Link to="/forgot-password">Reset Password</Link>
      </p>
    </div>
  );
};

export default SignIn;