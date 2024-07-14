import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../api/axiosInstance';

// user login - ADMIN/SELLER/USER
export const login = createAsyncThunk(
  'auth/USER_LOGIN',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/user/login', {
        email,
        password,
      });
      const { token, user } = response.data;
      localStorage.setItem('authToken', token);
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('userName', user.name);
      return { user };
    } catch (error) {
      return rejectWithValue(error.response?.data.message || 'An error ');
    }
  }
);

// user profile retrieve - ADMIN/SELLER/USER
export const userProfileFetch = createAsyncThunk(
  'auth/USER_PROFILE_FETCH',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) throw new Error('Please log in again.');
      const response = await axiosInstance.get('/user/me', {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data.message || 'An error occurred'
      );
    }
  }
);

// user profile retrieve - ADMIN/SELLER/USER
export const getAllProduct = createAsyncThunk(
  'GET/GET_ALL_PRODUCT',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/seller/products');
      const { allProduct } = response.data;
      return { allProduct };
    } catch (error) {
      console.error('Error:', error.response?.data);
      return rejectWithValue(
        error.response?.data.message || 'An error occurred'
      );
    }
  }
);

// Register -> USER
export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/user/register', {
        name,
        email,
        password,
      });
      const { token, user } = response.data;
      localStorage.setItem('authToken', token);
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('userName', user.name);
      return { user };
    } catch (error) {
      return rejectWithValue(error.response?.data.message || 'An error ');
    }
  }
);

// Register -> User
export const sellerRegister = createAsyncThunk(
  'auth/sellerRegister',
  async (
    { name, email, password, address, mobile_no },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post('user/seller/register', {
        name,
        email,
        password,
        address,
        mobile_no,
      });
      const { token, user } = response.data;
      localStorage.setItem('authToken', token);
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('userName', user.name);
      return { user };
    } catch (error) {
      return rejectWithValue(error.response?.data.message || 'An error ');
    }
  }
);

// create new product -> SELLER/ADMIN
export const createNewProduct = createAsyncThunk(
  'PRODUCT/CREATE_NEW_PRODUCT',
  async (
    { name, price, description, category, images },
    { rejectWithValue }
  ) => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) throw new Error('Please log in again.');

      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('category', category);
      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
      }
      const response = await axiosInstance.post(
        '/seller/new-products',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      const { newProduct } = response.data;
      return { newProduct };
    } catch (error) {
      return rejectWithValue(
        error?.response?.data || `An error occurred: ${error.message}`
      );
    }
  }
);

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: localStorage.getItem('authToken') ? true : false,
    userRole: localStorage.getItem('userRole') || null,
    userName: localStorage.getItem('userName') || null,
    user: null,
    allProduct: null,
    newProduct: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    // for USER LOGOUT
    logout: (state) => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userRole');
      localStorage.removeItem('userName');
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // for USER login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.userRole = action.payload.user.role;
        state.userName = action.payload.user.name;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // for USER REGISTERATION
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.userRole = action.payload.user.role;
        state.userName = action.payload.user.name;
        state.user = action.payload.user;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // for USER PROFILE
      .addCase(userProfileFetch.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userProfileFetch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addCase(userProfileFetch.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // for USER PROFILE
      .addCase(getAllProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allProduct = action.payload.allProduct;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // for SELLER REGISTERATION

      .addCase(sellerRegister.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sellerRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.userRole = action.payload.user.role;
        state.userName = action.payload.user.name;
        state.user = action.payload.user;
      })
      .addCase(sellerRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // for CREATE_NEW_PRODUCT -- SELLER

      .addCase(createNewProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createNewProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newProduct = action.payload.newProduct;
      })
      .addCase(createNewProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
