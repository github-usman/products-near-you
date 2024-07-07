import React from 'react';
import styles from './FooterProductLinks.module.scss';

const FooterProductLinks = () => {
  return (
    <>
      <div className={styles.Container}>
        <div>
          <h6>Categories</h6>
          <div className={styles.ProductList}>
            <p>Vegetables & Fruits</p>
            <p>Breakfast & instant food</p>
            <p>Bakery & Biscuits</p>
            <p>Atta, rice & dal</p>
            <p>Sauces & spreads</p>
            <p>Organic & gourmet</p>
            <p>Baby care</p>
            <p>Cleaning essentials</p>
            <p>Personal care</p>
          </div>
        </div>
        <div>
          <div className={`${styles.ProductList} ${styles['new-line']}`}>
            <p>Dairy, bread & eggs</p>
            <p>Cold drinks & juices</p>
            <p>Tea, coffee & drinks</p>
            <p>Masala, oil & more</p>
            <p>Chicken, meat & fish</p>
            <p>Paan corner</p>
            <p>Pharma & wellness</p>
            <p>Home & office</p>
            <p>Pet care</p>
          </div>
        </div>
        <div>
          <h6>Get to know us</h6>
          <div className={styles.ProductList}>
            <p>Company</p>
            <p>About</p>
            <p>Blog</p>
            <p>Help Center</p>
            <p>Our Value</p>
          </div>
        </div>
        <div>
          <h6>For Consumers</h6>
          <div className={styles.ProductList}>
            <p>Payments</p>
            <p>Shipping</p>
            <p>Product Returns</p>
            <p>FAQ</p>
            <p>Shop Checkout</p>
          </div>
        </div>
        <div>
          <h6>Become a Shopper</h6>
          <div className={styles.ProductList}>
            <p>Shopper Opportunities</p>
            <p>Become a Shopper</p>
            <p>Earnings</p>
            <p>Ideas & Guides</p>
            <p>New Retailers</p>
          </div>
        </div>
        <div>
          <h6>Freshcart programs</h6>
          <div className={styles.ProductList}>
            <p>Freshcart programs</p>
            <p>Gift Cards</p>
            <p>Promos & Coupons</p>
            <p>Freshcart Ads</p>
            <p>Careers</p>
          </div>
        </div>
      </div>
      <p style={{ textAlign: 'center', paddingBottom: '2rem' }}>
        Made with 🤍 by Usman
      </p>
    </>
  );
};

export default FooterProductLinks;
