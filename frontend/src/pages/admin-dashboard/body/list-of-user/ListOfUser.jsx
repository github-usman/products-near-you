import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../../redux/admin/adminLeftMenuSlice';
import UserTable from './UserTable';
import { FiMaximize } from 'react-icons/fi';
import { FaMinus } from 'react-icons/fa';

const ListOfUser = () => {
  const { users } = useSelector((state) => state.adminLeftMenu);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!users) {
      dispatch(getAllUsers());
    }
  }, [users, dispatch]);
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen((val) => !val);
  };
  return (
    <div className={`${isOpen ? 'list__of__users' : 'list__of__users__close'}`}>
      <div className="header">
        <p>Users</p>
        {isOpen ? (
          <FaMinus onClick={handleToggle} />
        ) : (
          <FiMaximize onClick={handleToggle} />
        )}
      </div>
      <div className="hr-line"></div>
      {users && <UserTable data={users} isOpen={isOpen} />}
    </div>
  );
};

export default ListOfUser;
