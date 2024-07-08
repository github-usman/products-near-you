import React, { useState } from 'react';
import { FaUserShield } from 'react-icons/fa';
import { IoBagHandleSharp } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';
import styles from './authLayout.module.scss';
import UserRegister from '../../../pages/auth/register/user/UserRegister';
import UserLogin from '../../../pages/auth/login/user/UserLogin';

const AuthLayout = () => {
  const [active, setActive] = useState('');

  const handleActive = (id) => {
    setActive(id);
  };

  return (
    <div className={styles.container}>
      <div>
        <FaUserShield onClick={() => handleActive('1')} />
        {active === '1' && <UserRegister handleActive={handleActive} />}
        {active === '2' && <UserLogin handleActive={handleActive} />}
      </div>
      <IoBagHandleSharp />
      <FaHeart />
    </div>
  );
};

export default AuthLayout;
