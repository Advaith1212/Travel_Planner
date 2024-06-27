import React, { useState } from 'react';
import { Dialog, DialogContent, TextField, Button } from '@material-ui/core';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import usersData from '../users.json';

const StyledDialog = styled(Dialog)`
  & .MuiPaper-root {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    padding: 24px;
    max-width: 400px;
  }
`;

const StyledDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 16px;
  width: 100%;
`;

const StyledButton = styled(Button)`
  && {
    background-color: ${({ variant }) => (variant === 'contained' ? '#2D9596' : 'transparent')};
    color: ${({ variant }) => (variant === 'contained' ? '#fff' : '#2D9596')};
    padding: 12px 24px;
    border-radius: 24px;
    text-transform: none;
    font-weight: 500;
    width: 100%;
    margin-bottom: 16px;

    &:hover {
      background-color: ${({ variant }) => (variant === 'contained' ? '#25797a' : 'transparent')};
    }
  }
`;

const AuthModal = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('signin'); // 'signin' or 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '', username: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSwitchMode = () => {
    setMode(mode === 'signin' ? 'signup' : 'signin');
    setUsername('');
    setEmail('');
    setPassword('');
    setErrors({ email: '', password: '', username: '' });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { email: '', password: '', username: '' };

    if (mode === 'signin') {
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
      }
    } else {
      if (!username) {
        newErrors.username = 'Username is required.';
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
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignIn = () => {
    if (validateForm()) {
      const user = usersData.find((u) => u.email === email && u.password === password);
      if (user) {
        console.log('Sign-in successful:', user);
        setIsLoggedIn(true);
        handleClose();
        navigate('/');
      } else {
        console.log('Sign-in failed: Invalid email or password');
        alert('Invalid email or password. Please try again.');
      }
    }
  };

  const handleSignUp = () => {
    if (validateForm()) {
      const existingUser = usersData.find((u) => u.email === email || u.username === username);
      if (existingUser) {
        console.log('Sign-up failed: Email or username already exists');
        alert('Email or username already exists. Please choose a different one.');
      } else {
        const newUser = { username, email, password };
        usersData.push(newUser);
        console.log('Sign-up successful:', newUser);
        setIsLoggedIn(true);
        handleClose();
        navigate('/');
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleForgotPassword = () => {
    // Add your forgot password logic here
    console.log('Forgot password clicked');
  };

  const handleContinueAsGuest = () => {
    handleClose(); // Close the dialog
    navigate('/'); // Navigate to the home page
  };

  return (
    <>
      {isLoggedIn ? (
        <Button onClick={handleLogout} variant="contained" color="primary" className="navItem">
          Logout
        </Button>
      ) : (
        <Button onClick={handleOpen} variant="contained" color="primary" className="navItem">
          {mode === 'signin' ? 'Sign in' : 'Sign up'}
        </Button>
      )}

      <StyledDialog open={open} onClose={handleClose}>
        <StyledDialogContent>
          {/* <img src="/path/to/logo.png" alt="Logo" style={{ marginBottom: '24px' }} /> */}

          {mode === 'signin' ? (
            <>
              <StyledTextField
                label="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />
              <StyledTextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
              />
              <StyledButton variant="contained" onClick={handleSignIn}>
                Sign In
              </StyledButton>
            </>
          ) : (
            <>
              <StyledTextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={!!errors.username}
                helperText={errors.username}
              />
              <StyledTextField
                label="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />
              <StyledTextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
              />
              <StyledButton variant="contained" onClick={handleSignUp}>
                Sign up
              </StyledButton>
            </>
          )}

          <StyledButton variant="text" onClick={handleSwitchMode}>
            {mode === 'signin' ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </StyledButton>

          <StyledButton variant="text" onClick={handleForgotPassword}>
            Forgot password?
          </StyledButton>
          <div style={{ marginTop: '16px', color: '#666' }}>
            <Button variant="text" color="primary" onClick={handleContinueAsGuest}>
              Continue as guest
            </Button>
          </div>
        </StyledDialogContent>
      </StyledDialog>
    </>
  );
};

export default AuthModal;
