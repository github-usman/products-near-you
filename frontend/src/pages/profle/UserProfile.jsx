import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userProfileFetch } from '../../redux/auth/authSlice';

const UserProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (!user) {
    dispatch(userProfileFetch());
  }
  return (
    <div className="wrapper">
      <p>{user?.name}</p>
    </div>
  );
};

export default UserProfile;
