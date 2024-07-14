import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct, login } from '../../../../redux/auth/authSlice';

const UserLogin = ({ handleActive }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login({ email, password }))
        .unwrap()
        .then(() => {
          navigate('/');
          handleActive('');
          dispatch(getAllProduct());
        })
        .catch(() => {});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth__user__login">
      <div className="parent-container">
        <div className="title">
          <h4>Sign In</h4>
          <RxCross1 onClick={() => handleActive('')} />
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="term__and__condition">
            By Signin in, you agree to our
            <span> Terms of Service & Privacy Policy</span>
          </p>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Sign In</button>
          <p className="already__exist_acc">
            If you don&apos;t have an account?&nbsp;
            <span className="link_button" onClick={() => handleActive('2')}>
              Sign Up
            </span>
          </p>
        </form>
        <p className="seller_link_button">
          <span onClick={() => handleActive('4')}>Become a Seller</span>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
