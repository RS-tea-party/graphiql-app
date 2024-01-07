import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ResultState {
  url: string;
  query: string;
  variables: { [key: string]: string };
  headers: { [key: string]: string };
}

const initialState: ResultState = {
  url: '',
  query: '',
  variables: {},
  headers: {},
};

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    changeResult: (state: ResultState, payload: PayloadAction<ResultState>) => {
      Object.assign(state, payload.payload);
    },
    resetResult: (state: ResultState) => {
      Object.assign(state, { url: '', query: '', variables: {}, headers: {} });
    },
  },
});

export const { changeResult, resetResult } = resultSlice.actions;
export default resultSlice;

export const resultUrlSelector = (state: RootState) => state.result.url;
export const resultQuerySelector = (state: RootState) => state.result.query;
export const resultVariablesSelector = (state: RootState) =>
  state.result.variables;
export const resultHeadersSelector = (state: RootState) => state.result.headers;
