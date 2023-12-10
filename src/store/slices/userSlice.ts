import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface UserState {
  isAuth: boolean;
}

const initialState: UserState = {
  isAuth: false,
};

const formSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: UserState) => {
      state.isAuth = true;
    },
    logout: (state: UserState) => {
      state.isAuth = true;
    },
  },
});

export const { login, logout } = formSlice.actions;
export default formSlice;

export const authSelector = (state: RootState) => state.user.isAuth;
