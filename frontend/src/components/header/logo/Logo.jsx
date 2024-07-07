import React from 'react';
import web_log from '../../../assets/media/images/header/logo/logo.png';
import { Link } from 'react-router-dom';
import styles from './web-logo.module.scss';

const Logo = () => {
  return (
    <div className={`${styles['header-web-log']}`}>
      <Link to={'/'} className={`${styles['container']}`}>
        <img
          className={styles.logoImg}
          src={web_log}
          alt="shopping in you city logo"
        />
        <h2 className={styles.logoName}>ProductNearYou</h2>
      </Link>
    </div>
  );
};

export default Logo;
