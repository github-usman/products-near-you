import React from 'react';
import Header from '../components/header/Header';
import { PropTypes } from 'prop-types';
import FooterProductLinks from '../components/footer/FooterProductLinks';
import styles from '../components/footer/FooterProductLinks.module.scss';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <div className={styles.footer}>
        <FooterProductLinks />
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
