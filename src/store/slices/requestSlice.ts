import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type RequestState = {
  requestData: string;
};

const initialState: RequestState = {
  requestData: '',
};

const requestDataSlice = createSlice({
  name: 'requestData',
  initialState,
  reducers: {
    updateRequestData: (state, action: PayloadAction<string>) => {
      state.requestData = action.payload;
    },
  },
});

export const selectRequestData = (state: RootState) => state.requestData.requestData;

export const { updateRequestData } = requestDataSlice.actions;
export const requestReducer = requestDataSlice.reducer;
