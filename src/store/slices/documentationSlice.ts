import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

interface DocumentationState {
  status: 'idle' | 'loading' | 'loaded' | 'error';
}

const initialState: DocumentationState = {
  status: 'idle',
};

const documentationSlice = createSlice({
  name: 'documentation',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.status = 'loading';
    },
    setLoaded: (state) => {
      state.status = 'loaded';
    },
    setError: (state) => {
      state.status = 'error';
    },
  },
});

export const selectDocumentation = (state: RootState) => state.documentation.status;

export const { setLoading, setLoaded, setError } = documentationSlice.actions;

export const documentationReducer = documentationSlice.reducer;
