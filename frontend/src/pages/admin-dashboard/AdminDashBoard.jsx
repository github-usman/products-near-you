import React from 'react';
import LeftNavbar from './left-navbar/LeftNavbar';
import BodyLayout from './body/BodyLayout';
import { useSelector } from 'react-redux';

const AdminDashBoard = () => {
  const isOpen = useSelector((state) => state.adminLeftMenu.isOpen);
  return (
    <div className="admin__dashboard__main">
      <div
        className={`${isOpen === true ? 'left__navbar' : 'left__navbar__close'}`}
      >
        {isOpen ? <LeftNavbar /> : <LeftNavbar />}
      </div>
      <div className="right__body">
        <BodyLayout />
      </div>
    </div>
  );
};

export default AdminDashBoard;
