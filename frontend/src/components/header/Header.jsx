import React from 'react';
import AuthLayout from './auth/AuthLayout';
import Logo from './logo/Logo';
import Navbar from './navbar/Navbar';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={`${styles['main__header']}`}>
      <div className={`${styles['wrapper']}  wrapper`}>
        <Logo />
        <Navbar />
        <AuthLayout />
      </div>
      <div className="hr-line"></div>
    </div>
  );
};

export default Header;
