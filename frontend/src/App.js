import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/home/Home';
import UserLogin from './pages/auth/login/user/UserLogin';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<UserLogin />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
