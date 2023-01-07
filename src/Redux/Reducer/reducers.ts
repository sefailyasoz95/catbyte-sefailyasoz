import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {IUser} from '../../Constants/types';
import {getUsers} from '../Actions/actions';
type InitialState = {
  error: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
  success: boolean;
  message: string;
  users: IUser[];
};
export const initialState: InitialState = {
  error: false,
  isAuthenticated: false,
  isLoading: false,
  success: false,
  message: '',
  users: [],
};

export const reducer = createSlice({
  name: 'global',
  initialState,
  reducers: {
    deleteUser: (state, action: PayloadAction<number>) => {
      let filtered = state.users.filter(item => item.id !== action.payload);
      state.users = filtered;
    },
    addUser: (state, action: PayloadAction<IUser>) => {
      state.users = [...state.users, action.payload];
      state.success = true;
      state.message = 'User created Successfully';
    },
    clearGlobalStates: state => {
      state.success = false;
      state.error = false;
      state.message = '';
    },
  },
  extraReducers: builder => {
    builder
      // *********** GET ALL STORES START *********** \\
      .addCase(getUsers.pending, state => {
        state.message = '';
        state.success = false;
        state.error = false;
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
          state.users = action.payload.data.users;
        } else {
          state.message = 'Something went wrong!';
          state.error = true;
        }
        state.isLoading = false;
      })
      .addCase(getUsers.rejected, (state, action: any) => {
        state.error = true;
        state.isLoading = false;
        // *********** GET ALL STORES END *********** \\
      });
  },
});

export const {deleteUser, addUser, clearGlobalStates} = reducer.actions;

export default reducer.reducer;
