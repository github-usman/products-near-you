import React, { useState } from 'react';
import { FaHeart, FaUserShield } from 'react-icons/fa';
import { IoBagHandleSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from '../../../pages/auth/login/user/UserLogin';
import UserRegister from '../../../pages/auth/register/user/UserRegister';
import { logout } from '../../../redux/auth/authSlice';
import styles from './authLayout.module.scss';
import SellerRegister from '../../../pages/auth/register/seller/SellerRegister';

const AuthLayout = () => {
  const [active, setActive] = useState('');
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userName = useSelector((state) => state.auth.userName);
  const { userRole } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleActive = (id) => {
    setActive(id);
  };

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      handleActive('');
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className={styles.container}>
      {isAuthenticated ? (
        <div className={styles.logoutMenuParent}>
          <p
            className={styles.name_user}
            style={{ backgroundColor: active === '3' ? '#182213' : '' }}
            onClick={() => handleActive('3')}
          >
            {userName && userName.slice(0, 1).toUpperCase()}
          </p>
          {active === '3' && (
            <div className={styles.logoutMenu}>
              <button onClick={handleLogout}>Logout</button>
              <Link
                to={`/${userRole}/profile`}
                onClick={() => handleActive('')}
              >
                View Profile
              </Link>
            </div>
          )}
        </div>
      ) : (
        <>
          <FaUserShield onClick={() => handleActive('1')} />
          {active === '1' && <UserLogin handleActive={handleActive} />}
          {active === '2' && <UserRegister handleActive={handleActive} />}
          {active === '4' && <SellerRegister handleActive={handleActive} />}
        </>
      )}
      <IoBagHandleSharp />
      <FaHeart />
    </div>
  );
};

export default AuthLayout;
