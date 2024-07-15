import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import FooterProductLinks from '../components/footer/FooterProductLinks';
import styles from '../components/footer/FooterProductLinks.module.scss';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const hideHeaderAndFooter =
    location.pathname.startsWith('/admin') ||
    location.pathname.startsWith('/seller');

  return (
    <div>
      {!hideHeaderAndFooter && <Header />}
      <main>{children}</main>
      {!hideHeaderAndFooter && (
        <div className={styles.footer}>
          <FooterProductLinks />
        </div>
      )}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
