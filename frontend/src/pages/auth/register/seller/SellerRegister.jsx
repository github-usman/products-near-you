import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import { sellerRegister } from '../../../../redux/auth/authSlice';

const SellerRegister = ({ handleActive }) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    address: '',
    location: '',
    mobile_no: '',
    cPassword: '',
  });
  const [checkConfirmPass, setCheckConfirmPass] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sellerRegister(formData))
      .unwrap()
      .then(() => {
        navigate('/');
        handleActive('');
      })
      .catch(() => {});
  };

  const handlePasswordConfirm = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      cPassword: value,
    });
    if (formData.password !== value) {
      setCheckConfirmPass('Passwords do not match');
    } else {
      setCheckConfirmPass('');
    }
  };

  return (
    <div className="auth__seller__register">
      <div className="parent-container">
        <div className="title">
          <h4>Seller Registration Form</h4>
          <RxCross1 onClick={() => handleActive('')} />
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Shop Name</label>
          <input
            type="text"
            id="name"
            placeholder="Please Enter your Name Shop"
            value={formData.name}
            name="name"
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email Address"
            value={formData.email}
            name="email"
            onChange={handleChange}
            required
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter Your Shop Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Enter Your Shop Location"
            value={formData.location}
            name="location"
            onChange={handleChange}
          />
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            required
          />
          <label htmlFor="cPassword">Confirm New Password</label>
          <input
            type="password"
            id="cPassword"
            placeholder="Confirm New Password"
            value={formData.cPassword}
            name="cPassword"
            onChange={handlePasswordConfirm}
            required
          />
          <label htmlFor="mobileNo">Mobile Number</label>
          <input
            type="tel"
            id="mobileNo"
            placeholder="Enter Your Business Mobile Number"
            value={formData.mobile_no}
            name="mobile_no"
            onChange={handleChange}
            required
          />
          {checkConfirmPass.length > 0 && (
            <p className="error-message">{checkConfirmPass}</p>
          )}
          <p className="term__and__condition">
            By signing up, you agree to our{' '}
            <span>Terms of Service & Privacy Policy</span>
          </p>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Register</button>
          <p className="already__exist_acc">
            Already have a Seller account?{' '}
            <span className="link_button" onClick={() => handleActive('1')}>
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SellerRegister;
