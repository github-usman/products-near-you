'use client';

import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import MegaMenu from './each-menu/mega-menu/MegaMenu';
import styles from './navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState('');

  const handleActive = (id) => {
    setActive(id);
  };

  // const handleHover = () => {
  //   setShowMenu(true);
  // };

  // const handleLeave = () => {
  //   setShowMenu(false);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.navMenu}>
        <p
          className={
            active === '1'
              ? `${styles.navMenuItem} ${styles.navMenuItemhover}`
              : styles.navMenuItem
          }
          onMouseEnter={() => handleActive('1')}
          onMouseLeave={() => handleActive('')}
        >
          Shops <IoIosArrowDown className={styles.navMenuIcon} />
        </p>
        <div
          className={styles.navMenuOption}
          onMouseEnter={() => handleActive('1')}
          onMouseLeave={() => handleActive('')}
        >
          {active === '1' && <MegaMenu />}
        </div>
      </div>
      <div className={styles.navMenu}>
        <p
          className={
            active === '2'
              ? `${styles.navMenuItem} ${styles.navMenuItemhover}`
              : styles.navMenuItem
          }
          onMouseEnter={() => handleActive('2')}
          onMouseLeave={() => handleActive('')}
        >
          Stores <IoIosArrowDown className={styles.navMenuIcon} />
        </p>
        <div
          className={styles.navMenuOption}
          onMouseEnter={() => handleActive('2')}
          onMouseLeave={() => handleActive('')}
        >
          {active === '2' && <MegaMenu />}
        </div>
      </div>
      <div className={styles.navMenu}>
        <p
          className={
            active === '3'
              ? `${styles.navMenuItem} ${styles.navMenuItemhover}`
              : styles.navMenuItem
          }
          onMouseEnter={() => handleActive('3')}
          onMouseLeave={() => handleActive('')}
        >
          Mega Menu <IoIosArrowDown className={styles.navMenuIcon} />
        </p>
        <div
          className={styles.navMenuOption}
          onMouseEnter={() => handleActive('3')}
          onMouseLeave={() => handleActive('')}
        >
          {active === '3' && <MegaMenu />}
        </div>
      </div>
      <div className={styles.navMenu}>
        <p
          className={
            active === '4'
              ? `${styles.navMenuItem} ${styles.navMenuItemhover}`
              : styles.navMenuItem
          }
          onMouseEnter={() => handleActive('4')}
          onMouseLeave={() => handleActive('')}
        >
          Pages <IoIosArrowDown className={styles.navMenuIcon} />
        </p>
      </div>
      <div className={styles.navMenu}>
        <Link
          to={'/seller-page'}
          className={
            active === '5'
              ? `${styles.navMenuItem} ${styles.navMenuItemhover}`
              : styles.navMenuItem
          }
          onMouseEnter={() => handleActive('5')}
          onMouseLeave={() => handleActive('')}
        >
          For Seller <IoIosArrowDown className={styles.navMenuIcon} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
