import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearAuthHeader, instance, setAuthHeader } from 'config/instance';

export const registerThunk = createAsyncThunk(
  'user/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/signup', user);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'user/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/login', user);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const {
      auth: { token },
    } = thunkAPI.getState();
    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(token);
      const { data } = await instance.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await instance.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
