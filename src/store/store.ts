import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import authPathSlice from './slices/authPathSlice';

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [authPathSlice.name]: authPathSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
