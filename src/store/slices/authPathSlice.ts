import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface AuthPathState {
  isLoginPath: boolean;
}

const initialState: AuthPathState = {
  isLoginPath: true,
};

const authPathSlice = createSlice({
  name: 'authPath',
  initialState,
  reducers: {
    loginPath: (state: AuthPathState) => {
      state.isLoginPath = true;
    },
    regPath: (state: AuthPathState) => {
      state.isLoginPath = false;
    },
  },
});

export const { loginPath, regPath } = authPathSlice.actions;
export default authPathSlice;

export const authPathSelector = (state: RootState) =>
  state.authPath.isLoginPath;
