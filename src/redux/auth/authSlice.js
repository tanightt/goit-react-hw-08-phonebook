import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './authOperations';

const pending = (state, action) => {
  state.isLoading = true;
  state.error = '';
};
const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = payload;
      })
      .addCase(refreshThunk.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
        state.token = null;
      })
      .addMatcher(isAnyOf(loginThunk.pending, registerThunk.pending), pending)
      .addMatcher(
        isAnyOf(loginThunk.rejected, registerThunk.rejected),
        rejected
      );
  },
});

export const authReducer = authSlice.reducer;
