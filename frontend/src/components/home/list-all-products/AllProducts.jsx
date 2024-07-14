import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../../redux/auth/authSlice';
import Product from './components/Product';

const AllProducts = () => {
  const dispatch = useDispatch();
  const { allProduct } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!allProduct) {
      dispatch(getAllProduct())
        .unwrap()
        .then(() => {})
        .catch(() => {});
    }
  }, [dispatch, allProduct]);

  return (
    <div className="wrapper home__list_all_product__container">
      {allProduct?.map((item) => (
        <Product key={item._id} details={item} />
      ))}
    </div>
  );
};

export default AllProducts;
