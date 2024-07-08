import React from 'react';
import { RxCross1 } from 'react-icons/rx';
const UserRegister = ({ handleActive }) => {
  return (
    <div className="auth__user__register">
      <div className="parent-container">
        <div className="title">
          <h4>Sign Up</h4>
          <RxCross1 onClick={() => handleActive('')} />
        </div>
        <form action="">
          <label htmlFor="Name">Name</label>
          <input type="text" placeholder="Enter Name" />
          <label htmlFor="Name">Email address</label>
          <input type="email" placeholder="Enter Email address" />
          <label htmlFor="Name">Password</label>
          <input type="password" placeholder="Enter Password" />
          <label htmlFor="Name">New Password</label>
          <input type="password" placeholder="Confirm New Password" />
          <p className="term__and__condition">
            By Signup, you agree to our{' '}
            <span>Terms of Service & Privacy Policy</span>
          </p>
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
