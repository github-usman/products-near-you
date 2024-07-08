import React from 'react';
import { RxCross1 } from 'react-icons/rx';

const UserLogin = ({ handleActive }) => {
  return (
    <div className="auth__user__login">
      <div className="parent-container">
        <div className="title">
          <h4>Sing In</h4>
          <RxCross1 onClick={() => handleActive('')} />
        </div>
        <form action="">
          <label htmlFor="Name">Email address</label>
          <input type="email" placeholder="Enter Email address" />
          <label htmlFor="Name">Password</label>
          <input type="password" placeholder="Enter Password" />
          <p className="term__and__condition">
            By Signup, you agree to our{' '}
            <span>Terms of Service & Privacy Policy</span>
          </p>
          <button type="submit">Sign Up</button>
          <p className="already__exist_acc">
            If you have not an account?&nbsp;
            <span className="link_button" onClick={() => handleActive('1')}>
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
