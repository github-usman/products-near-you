import React, { useState } from 'react';
import ListOfMenus from './ListOfMenus.jsx';
import { RiMenu2Line } from 'react-icons/ri';
import styles from './allDepartment.module.scss';

const AllDepartments = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleHover = () => {
    setShowMenu(true);
  };

  const handleLeave = () => {
    setShowMenu(false);
  };

  return (
    <div className={styles.AllDepartmentContainer}>
      <button
        className={styles.btnAllDepartment}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <RiMenu2Line />
        All Departments
      </button>
      {showMenu && (
        <ListOfMenus onMouseEnter={handleHover} onMouseLeave={handleLeave} />
      )}
    </div>
  );
};

export default AllDepartments;
