import React from 'react';
import styles from './popularProductCard.module.scss';
import { Link } from 'react-router-dom';

const Product = ({ details }) => {
  return (
    <div className={styles.container}>
      <p className={styles.cardDiscountDeatils}>
        {details.discount}2% Discount
      </p>
      <div className={styles.cardImgContainer}>
        <img
          className={styles.cardImg}
          src={details?.images[0]?.url}
          alt={details.name + details.category}
        ></img>
      </div>
      <div className={styles.cardContentContainer}>
        <p className={styles.cardCategory}>{details.category}</p>
        <p className={styles.cardProductName}>{details.name} </p>
        <p className={styles.productRaing}>
          {details.ratings === 0 ? '' : '★'}
        </p>
      </div>
      <div className={styles.cardBtnContainer}>
        <p className={styles.productPrice}>{details.price}₹</p>
        <Link to="/product-details" className={styles.checkoutBtn}>
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Product;
