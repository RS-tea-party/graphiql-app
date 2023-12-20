import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface UserState {
  isAuth: boolean;
}

const initialState: UserState = {
  isAuth: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: UserState) => {
      state.isAuth = true;
    },
    logout: (state: UserState) => {
      state.isAuth = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice;

export const authSelector = (state: RootState) => state.user.isAuth;
