import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type InitialState = {
  isAuthenticated: boolean;
};

const initialState: InitialState = {
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const selectAuth = (state: RootState) => state.user;
export const { setAuth } = userSlice.actions;
export const userReducer = userSlice.reducer;
