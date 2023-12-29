import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from './slices/userSlice';
import { responseReducer } from './slices/responseSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    responseData: responseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
