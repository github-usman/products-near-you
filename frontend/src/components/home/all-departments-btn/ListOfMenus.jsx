import React from 'react';
import { Link } from 'react-router-dom';
import styles from './allDepartment.module.scss';

const ListOfMenus = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={styles['list-menu-container']}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link to="/dairy-bread-eggs">Dairy, Bread & Eggs</Link>
      <Link to="/snacks-munchies">Snacks & Munchies</Link>
      <Link to="/fruits-vegetables">Fruits & Vegetables</Link>
      <Link to="/cold-drinks-juices">Cold Drinks & Juices</Link>
      <Link to="/breakfast-instant-food">Breakfast & Instant Food</Link>
      <Link to="/bakery-biscuits">Bakery & Biscuits</Link>
      <Link to="/chicken-meat-fish">Chicken, Meat & Fish</Link>
    </div>
  );
};

export default ListOfMenus;
