import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ResultState {
  url: string;
  query: string;
}

const initialState: ResultState = {
  url: '',
  query: '',
};

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    changeResult: (state, payload: PayloadAction<ResultState>) => {
      Object.assign(state, payload.payload);
    },
    resetResult: (state) => {
      Object.assign(state, { url: '', query: '' });
    },
  },
});

export const { changeResult, resetResult } = resultSlice.actions;
export default resultSlice;

export const resultUrlSelector = (state: RootState) => state.result.url;
export const resultQuerySelector = (state: RootState) => state.result.query;
