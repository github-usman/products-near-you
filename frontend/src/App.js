import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/home/Home';
import AuthAdmin from './custom-hooks/AuthAdmin';
import SellerPage from './pages/seller/Seller';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/seller-page"
            element={
              <AuthAdmin>
                <SellerPage />
              </AuthAdmin>
            }
          />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
