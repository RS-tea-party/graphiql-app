import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface DocsState {
  open: boolean;
}

const initialState: DocsState = {
  open: false,
};

const docsSlice = createSlice({
  name: 'documentation',
  initialState,
  reducers: {
    openDocs: (state) => {
      state.open = true;
    },
    closeDocs: (state) => {
      state.open = false;
    },
  },
});

export const { openDocs, closeDocs } = docsSlice.actions;
export default docsSlice;

export const docsShown = (state: RootState) => state.documentation.open;
