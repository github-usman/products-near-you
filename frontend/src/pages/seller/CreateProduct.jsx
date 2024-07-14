import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createNewProduct } from '../../redux/auth/authSlice';

const CreateProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, price, description, category, images };

    await dispatch(createNewProduct(formData))
      .unwrap()
      .then(() => {
        navigate('/seller/new-product-report');
      })
      .catch((err) => {
        console.error('Error creating product:', err);
      });
  };

  return (
    <div className="auth__user__register">
      <div className="parent-container">
        <div className="title">
          <h4>Feed New Product</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            placeholder="Enter Price"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            placeholder="Enter Description"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="category">Category</label>
          <input
            type="text"
            placeholder="Enter Category"
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="images">Images</label>
          <input
            type="file"
            name="images"
            id="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          <p className="term__and__condition">
            By Signup, you agree to our{' '}
            <span>Terms of Service & Privacy Policy</span>
          </p>
          {error && <p className="error-message">{error.message || error}</p>}
          <button type="submit">Submit</button>
          <p className="already__exist_acc">Already have an account? Sign In</p>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
