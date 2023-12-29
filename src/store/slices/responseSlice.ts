import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import prettifyingService from '../../services/PrettifyingService';

type UserState = {
  responseData: string;
};

const initialState: UserState = {
  responseData: '',
};

const responseDataSlice = createSlice({
  name: 'responseData',
  initialState,
  reducers: {
    updateResponseData: (state, action: PayloadAction<string>) => {
      state.responseData = prettifyingService.formatJSON(action.payload);
    },
  },
});

export const selectResponseData = (state: RootState) => state.responseData.responseData;

export const { updateResponseData } = responseDataSlice.actions;
export const responseReducer = responseDataSlice.reducer;
