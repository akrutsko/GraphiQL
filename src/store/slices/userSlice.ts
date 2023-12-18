import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type UserState = {
  isAuthenticated: boolean;
};

const initialState: UserState = {
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
