import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../../../redux/auth/authSlice';

const UserRegister = ({ handleActive }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [checkCofirmPass, setCheckCofirmPass] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }))
      .unwrap()
      .then(() => {
        navigate('/');
        handleActive('');
      })
      .catch(() => {});
  };

  const handlePasswordConfirm = (e) => {
    setCPassword(e.target.value);
    if (password !== e.target.value) {
      setCheckCofirmPass('Passwords do not match');
    } else {
      setCheckCofirmPass('');
    }
  };

  return (
    <div className="auth__user__register">
      <div className="parent-container">
        <div className="title">
          <h4>Sign Up</h4>
          <RxCross1 onClick={() => handleActive('')} />
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            placeholder="Enter Email address"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirm-password">Confrim New Password</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm New Password"
            value={cPassword}
            onChange={handlePasswordConfirm}
          />
          {checkCofirmPass.length > 0 && (
            <p className="error-message">{checkCofirmPass}</p>
          )}
          <p className="term__and__condition">
            By Signup, you agree to our{' '}
            <span>Terms of Service & Privacy Policy</span>
          </p>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Sign Up</button>
          <p className="already__exist_acc">
            Already have an account?{' '}
            <span className="link_button" onClick={() => handleActive('1')}>
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
