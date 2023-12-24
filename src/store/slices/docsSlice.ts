import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface DocsState {
  docs: string;
  open: boolean;
}

const initialState: DocsState = {
  docs: '',
  open: false,
};

const docsSlice = createSlice({
  name: 'documentation',
  initialState,
  reducers: {
    setDocumentation: (state, payload: PayloadAction<string>) => {
      state.docs = payload.payload;
    },
    openDocs: (state) => {
      state.open = true;
    },
    closeDocs: (state) => {
      state.open = false;
    },
  },
});

export const { setDocumentation, openDocs, closeDocs } = docsSlice.actions;
export default docsSlice;

export const docsSelector = (state: RootState) => state.documentation.docs;
export const docsShown = (state: RootState) => state.documentation.open;
