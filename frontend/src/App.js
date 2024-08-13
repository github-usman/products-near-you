import React from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const MainLayout = lazy(() => import('./layout/MainLayout'));
const Home = lazy(() => import('./pages/home/Home'));
const SellerPage = lazy(() => import('./pages/seller/Seller'));
const AdminProfile = lazy(() => import('./pages/profle/AdminProfile'));
const CreateProduct = lazy(() => import('./pages/seller/CreateProduct'));
const NewProductReport = lazy(() => import('./pages/seller/NewProductReport'));
const AdminDashBoard = lazy(
  () => import('./pages/admin-dashboard/AdminDashBoard')
);
import _404 from './components/_404';
import AuthAdmin from './custom-hooks/AuthAdmin';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/admin/dashboard" element={<AdminDashBoard />} />
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
            <Route path="*" element={<_404 />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </Router>
  );
};

export default App;
