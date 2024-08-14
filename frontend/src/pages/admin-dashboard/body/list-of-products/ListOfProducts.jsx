import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../../../redux/auth/authSlice';
import UserTable from './ProductsTable';
import { FiMaximize } from 'react-icons/fi';
import { FaMinus } from 'react-icons/fa';

const ListOfProducts = () => {
  const { allProduct } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!allProduct) {
      dispatch(getAllProduct());
    }
  }, [allProduct, dispatch]);
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen((val) => !val);
  };
  return (
    <div
      className={`${isOpen ? 'list__of__product' : 'list__of__users__close'}`}
    >
      <div className="header">
        <p>All Products</p>
        {isOpen ? (
          <FaMinus onClick={handleToggle} />
        ) : (
          <FiMaximize onClick={handleToggle} />
        )}
      </div>
      <article>
        {allProduct && <UserTable k data={allProduct} isOpen={isOpen} />}
      </article>
    </div>
  );
};

export default ListOfProducts;
