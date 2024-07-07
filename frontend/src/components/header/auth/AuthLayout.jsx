import React from 'react';
import { FaUserShield } from 'react-icons/fa';
import { IoBagHandleSharp } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';
import styles from './authLayout.module.scss';

const AuthLayout = () => {
  return (
    <div className={styles.container}>
      <FaUserShield />
      <IoBagHandleSharp />
      <FaHeart />
    </div>
  );
};

export default AuthLayout;
