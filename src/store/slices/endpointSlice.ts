import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface EndpointState {
  url: string;
  isValid: boolean;
  isLoading: boolean;
}

const initialState: EndpointState = {
  url: '',
  isValid: false,
  isLoading: false,
};

const formSlice = createSlice({
  name: 'endpoint',
  initialState,
  reducers: {
    setEndpointUrl: (state, { payload }: PayloadAction<string>) => {
      state.url = payload;
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
  },
});

export const { setEndpointUrl, setIsLoading, setIsValid, setEndpointState } =
  formSlice.actions;
export default formSlice;

export const urlSelector = (state: RootState) => state.endpoint.url;
export const isValidSelector = (state: RootState) => state.endpoint.isValid;
export const isLoadingSelector = (state: RootState) => state.endpoint.isLoading;
