import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', email: '', password: '' });
  const [isRegistered, setIsRegistered] = useState(false);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { username: '', email: '', password: '' };

    if (!username) {
      newErrors.username = 'Name is required.';
      valid = false;
    }
    if (!email) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = 'Email is invalid.';
      valid = false;
    }
    if (!password) {
      newErrors.password = 'Password is required.';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Sign Up:', username, email, password);
      setIsRegistered(true); // Assume registration is successful
    } else {
      console.log('Validation Failed:', errors);
    }
  };

  const handleRedirect = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <div style={{ textAlign: 'center' , color: '#2D9596'}}>
      <h2>Sign Up</h2>
      {isRegistered ? (
        <div>
          <p>Successfully registered into the application!</p>
          <button onClick={handleRedirect} style={{ backgroundColor: '#2D9596', color: '#fff', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Go to Home Page</button>
        </div>
      ) : (
        <form onSubmit={handleSignUp} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="username" style={{ color: '#2D9596' }}>Name:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ marginLeft: '10px' }}
            />
            {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ color: '#2D9596' }}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginLeft: '14px' }}
            />
            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password" style={{ color: '#2D9596' }}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginLeft: '0px' }}
            />
            {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
          </div>
          <button type="submit" style={{ backgroundColor: '#2D9596', color: '#fff', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Sign Up</button>
        </form>
      )}
      <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default Register;