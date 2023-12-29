import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from './slices/userSlice';
import { responseReducer } from './slices/responseSlice';
import { requestReducer } from './slices/requestSlice';
import { endpointReducer } from './slices/endpointSlice';
import { variablesReducer } from './slices/variablesSlice';
import { headersReducer } from './slices/headersSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    responseData: responseReducer,
    requestData: requestReducer,
    endpoint: endpointReducer,
    variables: variablesReducer,
    headers: headersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
