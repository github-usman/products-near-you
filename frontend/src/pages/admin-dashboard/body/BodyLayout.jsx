import React, { useState } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAdminLeftDashboard } from '../../../redux/admin/adminLeftMenuSlice';
import AdminProfile from './AdminProfile';
import CardItemd from './CardItemd';
import ListOfUser from './list-of-user/ListOfUser';
import ListOfProducts from './list-of-products/ListOfProducts';

const DataDetails = [
  {
    total_order: '+43',
    Name: 'New User Registered',
    image_icon: 'any',
    color: '#17A2B8',
  },
  {
    total_order: '+3',
    Name: 'New Seller',
    image_icon: 'any',
    color: '#28A745',
  },
  {
    total_order: 43,
    Name: 'New Orders',
    image_icon: 'any',
    color: '#FFC107',
  },
  {
    total_order: 43,
    Name: 'New Orders',
    image_icon: 'any',
    color: '#DC3545',
  },
];

const BodyLayout = () => {
  const dispatch = useDispatch();
  const [isAdminProfileOpen, setisAdminProfileOpen] = useState(false);
  const handleToggle = () => {
    dispatch(toggleAdminLeftDashboard());
  };
  const profileToggle = () => {
    setisAdminProfileOpen((val) => !val);
  };
  const userName = useSelector((state) => state.auth.userName);
  let firstName = '';
  for (let i = 0; i < userName.length; i++) {
    if (userName[i] === ' ') {
      break;
    }
    firstName += userName[i];
  }
  return (
    <div className="admin__dashboard__body__layout">
      <header className="header">
        <div className="toggle__btn" onClick={handleToggle}>
          <FaBars />
        </div>
        <button className="profile" onClick={profileToggle}>
          <FaUserCircle />
          {firstName}
          <IoMdArrowDropdown />
        </button>
      </header>
      <div className="hr-line"></div>
      <main className="main-container">
        {isAdminProfileOpen && <AdminProfile />}
        <div className="cards">
          {DataDetails.map((item, index) => {
            return <CardItemd key={index} details={item} />;
          })}
        </div>
        <ListOfUser />
        <ListOfProducts />
      </main>
    </div>
  );
};

export default BodyLayout;
