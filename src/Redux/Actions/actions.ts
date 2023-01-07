import {createAsyncThunk} from '@reduxjs/toolkit';
import {GetUsersAsync} from '../Services/services';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, thunkAPI) => {
    try {
      // const state = thunkAPI.getState() as RootStore;
      return await GetUsersAsync();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);
