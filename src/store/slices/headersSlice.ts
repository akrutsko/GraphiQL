import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type headersState = {
  headers: string;
};

const initialState: headersState = {
  headers: '{\n  \n}',
};

const headersSlice = createSlice({
  name: 'headers',
  initialState,
  reducers: {
    updateHeaders: (state, action: PayloadAction<string>) => {
      state.headers = action.payload;
    },
  },
});

export const selectHeadersData = (state: RootState) => state.headers.headers;

export const { updateHeaders } = headersSlice.actions;
export const headersReducer = headersSlice.reducer;
