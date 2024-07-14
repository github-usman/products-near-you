import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/home/Home';
import AuthAdmin from './custom-hooks/AuthAdmin';
import SellerPage from './pages/seller/Seller';
import AdminProfile from './pages/profle/AdminProfile';
import CreateProduct from './pages/seller/CreateProduct';
import NewProductReport from './pages/seller/NewProductReport';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-product" element={<CreateProduct />} />

          <Route
            path="/seller-page"
            element={
              <AuthAdmin>
                <SellerPage />
              </AuthAdmin>
            }
          />
          <Route
            path="/seller/new-product-report"
            element={
              <AuthAdmin>
                <NewProductReport />
              </AuthAdmin>
            }
          />
          <Route
            path="/admin/profile"
            element={
              <AuthAdmin>
                <AdminProfile />
              </AuthAdmin>
            }
          />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
