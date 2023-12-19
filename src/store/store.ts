import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import authPathSlice from './slices/authPathSlice';
import api from '../services/api';
import endpointSlice from './slices/endpointSlice';

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [authPathSlice.name]: authPathSlice.reducer,
    [endpointSlice.name]: endpointSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
