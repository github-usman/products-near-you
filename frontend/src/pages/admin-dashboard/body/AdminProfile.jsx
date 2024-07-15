import React from 'react';
import { FaUserSecret } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const AdminProfile = () => {
  const username = useSelector((state) => state.auth.userName);
  return (
    <div className="profile__admin_dashboard">
      <FaUserSecret className="pic" />
      <p>{username}</p>
      <div className="buttons">
        <button>Logout</button>
        <button>Logout</button>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default AdminProfile;
