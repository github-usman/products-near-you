import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import adminLeftMenuReducer from './admin/adminLeftMenuSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    adminLeftMenu: adminLeftMenuReducer,
  },
});
