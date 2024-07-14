import React from 'react';
import { useSelector } from 'react-redux';

const NewProductReport = () => {
  const { error, newProduct } = useSelector((state) => state.auth);
  return (
    <div className="auth__user__register">
      <div className="parent-container">
        <div className="title">
          <h4>New Product Details</h4>
          {/* <RxCross1 onClick={() => handleActive('')} /> */}
        </div>
        {newProduct ? (
          <>
            <h2>Your Product has been Added Successfully</h2>
            <p>{newProduct.name}</p>
            <p>{newProduct.description}</p>
            <p>{newProduct.price}</p>
            <p>{newProduct.category}</p>
          </>
        ) : (
          <>
            <p>Due to {error} new Product Feed has been Failed.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default NewProductReport;
