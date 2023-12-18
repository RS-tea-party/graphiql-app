import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface UserState {
  isAuth: boolean;
  email: string | null;
  token: string | null;
  id: string | null;
}

const initialState: UserState = {
  isAuth: false,
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: UserState, action) => {
      state.isAuth = true;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    logout: (state: UserState) => {
      state.isAuth = false;
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice;

export const authSelector = (state: RootState) => state.user.isAuth;
