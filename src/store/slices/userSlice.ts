import { createSlice } from '@reduxjs/toolkit';

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
