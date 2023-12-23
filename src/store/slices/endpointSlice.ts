import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface EndpointState {
  url: string;
  isValid: boolean;
  isLoading: boolean;
  documentation: string;
  query: string;
}

const initialState: EndpointState = {
  url: '',
  isValid: false,
  isLoading: false,
  documentation: '',
  query: '',
};

const formSlice = createSlice({
  name: 'endpoint',
  initialState,
  reducers: {
    setEndpointUrl: (state, { payload }: PayloadAction<string>) => {
      state.url = payload;
    },
    setQuery: (state, { payload }: PayloadAction<string>) => {
      state.query = payload;
    },
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    setIsValid: (state, { payload }: PayloadAction<boolean>) => {
      state.isValid = payload;
    },
    setEndpointState: (
      state,
      { payload }: PayloadAction<Partial<EndpointState>>
    ) => Object.assign(state, payload),
    action: (state, payload: PayloadAction) => {
      Object.assign(state, payload);
    },
  },
});

export const {
  setEndpointUrl,
  setIsLoading,
  setIsValid,
  setEndpointState,
  setQuery,
  action,
} = formSlice.actions;
export default formSlice;

export const urlSelector = (state: RootState) => state.endpoint.url;
export const querySelector = (state: RootState) => state.endpoint.query;
export const isValidSelector = (state: RootState) => state.endpoint.isValid;
export const isLoadingSelector = (state: RootState) => state.endpoint.isLoading;
