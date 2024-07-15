import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../api/axiosInstance';

// all users retrieve - ADMIN
export const getAllUsers = createAsyncThunk(
  'ADMIN/GET_ALL_USERS',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) throw new Error('Please log in again.');
      const response = await axiosInstance.get('/admin/users', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { users } = response.data;
      console.log(users);
      return { users };
    } catch (error) {
      console.error('Error:', error.response?.data);
      return rejectWithValue(
        error.response?.data.message || 'An error occurred'
      );
    }
  }
);

const adminLeftMenuSlice = createSlice({
  name: 'adminLeftMenuSlice',
  initialState: {
    isOpen: true,
    users: null,
    isLoading: false,
  },
  reducers: {
    toggleAdminLeftDashboard: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      // for USER login
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.users;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { toggleAdminLeftDashboard } = adminLeftMenuSlice.actions;
export default adminLeftMenuSlice.reducer;
