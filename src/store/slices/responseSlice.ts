import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type ResponseState = {
  responseData: string;
};

const initialState: ResponseState = {
  responseData: '',
};

const responseDataSlice = createSlice({
  name: 'responseData',
  initialState,
  reducers: {
    updateResponseData: (state, action: PayloadAction<string>) => {
      state.responseData = action.payload;
    },
  },
});

export const selectResponseData = (state: RootState) => state.responseData.responseData;

export const { updateResponseData } = responseDataSlice.actions;
export const responseReducer = responseDataSlice.reducer;
